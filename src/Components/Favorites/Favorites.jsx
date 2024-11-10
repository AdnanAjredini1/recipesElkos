import { useEffect, useState } from 'react';
import './favorite.css'


import RecipesCard from '../MainPage/RecipesTabs/RecipesCard/RecipesCard';
import ViewRecipe from '../MainPage/RecipesTabs/ViewRecipe/ViewRecipe';
import { createPortal } from 'react-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';


function Favorites() {
    const [cardsData, setCardsData] = useState();
    const [isBackdrop, setIsBackDrop] = useState(false);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const userProfile = useSelector((state) => state.userProfile.user);
    

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`https://recipeback-ijkr.onrender.com/likes/user/${userProfile.userId}`, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
              withCredentials: true,
            });
            setCardsData(response.data);
            console.log(response.data, "response from the posts 0000================== ==================== ================= ==============");
            
            
          } catch (err) {
            console.log(err);
          }
        };
        fetchData();
      }, []);
    return (
        <div className=" favoritesWrapper">
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
  
       
        <div className="secondRow">
        {cardsData && cardsData.length > 0 && cardsData.map((item) => (
  <div className="cardWrapper" key={item.post_id}>
    <RecipesCard
      post_id={item.post_id}
      foodName={item.title}
      setIsBackDrop={setIsBackDrop}
      isBackdrop={isBackdrop}
      image={item.post_image}
      setSelectedRecipe={setSelectedRecipe}
      time={item.cooking_time.seconds}
      foodDescription={item.content}
    />
  </div>
))}
         
          
        </div>
      </div>
    );
}

export default Favorites;