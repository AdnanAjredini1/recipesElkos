import "./view-recipe.css";
import FavoriteIcon from "./view-recipe-assets/favorite-svgrepo-com(2).svg?react";
import { useState } from "react";

function ViewRecipe({ isBackdrop, setIsBackDrop, image }) {
  const [like, setLike] = useState(false);
  return (
    <div className="viewRecipeWrapper">
      <div className="leftPart">
        <div
          className="imageViewRecipe"
          style={{ content: `url(${image})` }}
        ></div>
        <FavoriteIcon
          className={`favoriteIcon  ${like ? "isLike" : ""}`}
          onClick={() => setLike(!like)}
          alt="Like"
        />
      </div>
      <div className="rightPart">
        <div className="imageViewRecipe"></div>
        <button
          onClick={() => {
            setIsBackDrop(!isBackdrop);
          }}
          style={{
            background: "red",
            width: 50,
            height: 50,
            position: "absolute",
            right: "0",
            borderRadius: "14px",
          }}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default ViewRecipe;
