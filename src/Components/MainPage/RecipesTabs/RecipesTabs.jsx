import "./recipesTabs.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import RecipesCard from "./RecipesCard/RecipesCard";
import { createPortal } from "react-dom";
import ViewRecipe from "./ViewRecipe/ViewRecipe";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function RecipesTabs({ searchQuery }) {
  const [isBackdrop, setIsBackDrop] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [recipeTabsDataa, setRecipeTabsDataa] = useState([]);
 
  const isPosted = useSelector(state => state.isPosted.isPosted);


  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://recipeback-ijkr.onrender.com/api/posts", {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        });
        setRecipeTabsDataa(response.data);
        
        
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [isPosted]);

  const groupedRecipesData = recipeTabsDataa.reduce(
    (acc, recipe) => {
   
      const { category } = recipe;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(recipe);

      acc["All"].push(recipe);

      return acc;
    },
    { All: [] }
  );

 

  
  const filteredRecipesData = Object.entries(groupedRecipesData).map(
    ([category, items]) => ({
      label: category,
      items: items.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    })
  );

  return (
    <div className="recipesTabsWrapper">
      {isBackdrop &&
        createPortal(
          <div
            className={`viewRecipeWrapper ${!isBackdrop ? "displayNone" : ""}`}
          >
            <ViewRecipe
              isBackdrop={isBackdrop}
              setIsBackDrop={setIsBackDrop}
              image={selectedRecipe?.image}
              foodName={selectedRecipe.foodName}
              foodDescription={selectedRecipe.foodDescription}
              post_id={selectedRecipe.post_id}
            />
            <div className="backdrop" onClick={() => setIsBackDrop(false)}></div>
          </div>,
          document.getElementById("viewRecipes")
        )}

      <div className="firstRow">
        <p className="bigTitle">
          Learn, Cook, <span>&</span> Eat your food
        </p>
        <div className="numberOfRecipesWrapper">
          <p className="num">{recipeTabsDataa.length}</p>
          <p className="text">Recipes</p>
        </div>
      </div>
      <div className="secondRow">
        <Tabs className="tabsWrapper">
          <TabList className="tabsListWrp">
            {filteredRecipesData.map((tab) => (
              <Tab className="tabi" key={tab.label}>
                {tab.label}
              </Tab>
            ))}
          </TabList>
          {filteredRecipesData.map((tab) => (
            <TabPanel key={tab.label}>
              <div className="cardWrapper">
                {tab.items.map((item) => (
                  
                  <RecipesCard
                    key={item.post_id}
                    post_id={item.post_id}
                    foodName={item.title}
                    setIsBackDrop={setIsBackDrop}
                    isBackdrop={isBackdrop}
                    image={item.post_image}
                    setSelectedRecipe={setSelectedRecipe}
                    time={item.cooking_time.seconds}
                    foodDescription={item.content}
                  />
                ))}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
}

export default RecipesTabs;
