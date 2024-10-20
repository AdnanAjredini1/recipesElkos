import "./search.css";
import "hamburgers/dist/hamburgers.css";
import SearchIcon from "./search-assets/search-svgrepo-com.svg?react";
import { useDispatch, useSelector } from "react-redux";
import { hamburgerActions } from "../../../Store/hamburgerButtonSlice";
import { Link } from "react-router-dom";
import PlusIcon from "./search-assets/add-svgrepo-com.svg?react";
import { createPortal } from "react-dom";
import { useState } from "react";
import Close from '../RecipesTabs/ViewRecipe/view-recipe-assets/close-bold-svgrepo-com.svg?react'

function Search({ setSearchQuery }) {
  const [isAddRecipe, setIsAddRecipe] = useState(false);
  const isActiveHamburger = useSelector(
    (state) => state.hamburger.isActiveHamburger
  );
  const dispatch = useDispatch();
  console.log("Hamburger is active", isActiveHamburger);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="searchLogginWrapper">
      {isAddRecipe && createPortal(
        <div className="addRecipeWrapper">
        
            <form className="addRecipeForm">
              <Close className="closeIconForAdd" onClick={() => setIsAddRecipe(!isAddRecipe)}/>
              <p className="formAddRecipeTitle">Share Your Recipe</p>
              <p className="formAddRecipeUnderTitle">Add your favorite recipe below. Please include all the details, ingredients, and steps so others can enjoy your delicious creation!</p>

            </form>
        
        </div>,
        document.getElementById("addRecipe")
      )}

      <p className="iconBrand">Chefie</p>

      <div className="searchWrapper">
        <input
          type="search"
          className="searchInput"
          placeholder="Search recipes..."
          onChange={handleSearchChange}
        />
        <SearchIcon className="searchIcon" />
      </div>
      <div className="addRecipeButton" onClick={() => setIsAddRecipe(!isAddRecipe)}>
        <PlusIcon className="plusIcon" />
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <Link to="/login">
          <div className="logginButtonWrapper">
            <p>Login</p>
          </div>
        </Link>

        <button
          className={`hamburger hamburger--collapse  hamburgerButton ${
            isActiveHamburger && "is-active"
          }`}
          type="button"
          onClick={() => dispatch(hamburgerActions.setActiveHamburger())}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Search;
