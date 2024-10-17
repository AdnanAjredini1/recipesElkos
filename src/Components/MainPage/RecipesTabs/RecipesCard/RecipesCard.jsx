import "./reecipes-card.css";
import StarIcon from "../recipesCard-assets/star-filled-rate-rating-bookmark-favourite-save-priority-important-svgrepo-com.svg?react";
function RecipesCard({ time, foodName, setIsBackDrop }) {
  return (
    <div className="recipesCardWrapper">
      <div className="recipesCardImg"></div>
      <div className="cardLine"></div>
      <div className="minsAndViewWrapper">
        <p>20mins</p>
        <button onClick={() => setIsBackDrop(true)}>View Recipe</button>
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
