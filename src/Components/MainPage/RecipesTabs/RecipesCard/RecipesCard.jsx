import "./reecipes-card.css";
import StarIcon from "../recipesCard-assets/star-filled-rate-rating-bookmark-favourite-save-priority-important-svgrepo-com.svg?react";
function RecipesCard({
  time,
  foodName,
  setIsBackDrop,
  image,
  setSelectedRecipe,
}) {
  const handleViewRecipe = () => {
    setSelectedRecipe({ image, foodName });
  };
  return (
    <div className="recipesCardWrapper">
      <div className="recipesCardImg" style={{ content: `url(${image})` }}>
        {" "}
      </div>
      <div className="cardLine"></div>
      <div className="minsAndViewWrapper">
        <p>20mins</p>
        <button
          onClick={() => {
            setIsBackDrop(true);
            setSelectedRecipe({image});
          }}
        >
          View Recipe
        </button>
      </div>
      <p className="foodName">{foodName}</p>
      <div className="rattingWrapper">
        <StarIcon className="starIcon" />
        <StarIcon className="starIcon" />
        <StarIcon className="starIcon" />
        <StarIcon className="starIcon" />
        <StarIcon className="starIcon" />
      </div>
    </div>
  );
}

export default RecipesCard;
