import "./recipesTabs.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { recipesTabsData } from "./recipesTabData";
import RecipesCard from "./RecipesCard/RecipesCard";
import { createPortal } from "react-dom";
import ViewRecipe from "./ViewRecipe/ViewRecipe";
import { useState } from "react";
function RecipesTabs() {
  const [isBackdrop, setIsBackDrop] = useState(false);
  return (
    <div className="recipesTabsWrapper">
     {isBackdrop &&    createPortal(
        <div className={`viewRecipeWrapper ${!isBackdrop ? 'displayNone':''}`}>
          <ViewRecipe isBackdrop={isBackdrop} setIsBackDrop={setIsBackDrop}/>
          <div className="backdrop"></div>
        </div>,
        document.getElementById("viewRecipes")
      )}
   
      <div className="firstRow">
        <p className="bigTitle">
          Learn, Cook, <span>&</span> Eat your food
        </p>
        <div className="numberOfRecipesWrapper">
          <p className="num">8</p>
          <p className="text">Recipes</p>
        </div>
      </div>
      <div className="secondRow">
        <Tabs className="tabsWrapper">
          <TabList className="tabsListWrp">
            {recipesTabsData.map((tab) => (
              <Tab className="tabi" key={tab.label}>
                {tab.label}
              </Tab>
            ))}
          </TabList>
          {recipesTabsData.map((tab) => (
            <TabPanel key={tab.label}>
              <div className="cardWrapper">
                {tab.items.map((item) => (
                  <RecipesCard key={item.name} foodName={item.name} setIsBackDrop={setIsBackDrop} isBackdrop={isBackdrop} />
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
