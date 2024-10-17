import "./view-recipe.css";

function ViewRecipe({ isBackdrop, setIsBackDrop }) {
  return (
    <div className="viewRecipeWrapper">
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
      <div className="imageViewRecipe"></div>
      <div className=""></div>
    </div>
  );
}

export default ViewRecipe;
