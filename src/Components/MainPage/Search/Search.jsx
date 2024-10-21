import "./search.css";
import "hamburgers/dist/hamburgers.css";
import SearchIcon from "./search-assets/search-svgrepo-com.svg?react";
import { useDispatch, useSelector } from "react-redux";
import { hamburgerActions } from "../../../Store/hamburgerButtonSlice";
import { Link } from "react-router-dom";
import PlusIcon from "./search-assets/add-svgrepo-com.svg?react";
import { createPortal } from "react-dom";
import Close from "../RecipesTabs/ViewRecipe/view-recipe-assets/close-bold-svgrepo-com.svg?react";
import { isLoggedInActions } from "../../../Store/isLoggedIn";
import { useState } from "react";

function Search({ setSearchQuery }) {
  const isActiveHamburger = useSelector(
    (state) => state.hamburger.isActiveHamburger
  );

  const [isOpenAddForm, setIsOpenAddForm] = useState(false);

  const isLoggedIn = useSelector((state) => state.isLoggedIn.isLoggedIn);
  console.log(isLoggedIn, "IsLoggedIn is there  ");

  const dispatch = useDispatch();
  console.log("Hamburger is active", isActiveHamburger);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="searchLogginWrapper">
      {isOpenAddForm &&
        createPortal(
          <div className="addRecipeWrapper">
            <form className="addRecipeForm">
              <Close
                className="closeIconForAdd"
                onClick={() => setIsOpenAddForm(!isOpenAddForm)}
              />
              <p className="formAddRecipeTitle">Share Your Recipe</p>
              <p className="formAddRecipeUnderTitle">
                Add your favorite recipe below. Please include all the details,
                ingredients, and steps so others can enjoy your delicious
                creation!
              </p>

              <div className="inputsWrapper">
                <div className="inputsFirstRow">
                <div className="inputTitleWrapper">
                <label className="labelInputTitle">Food name</label>
                <input
                    type="text"
                    placeholder="title"
                    className="inputTitleAddRecipe"
                  />
                </div>
                 
                  <div className="imageInputWrapper">
                    <label className="imageLabel">Upload an image</label>
                    <input
                      type="file"
                      name="imageUpload"
                      className="imageInput"
                    />
                  </div>
                </div>

                <div className="descriptionInputWrapper">
                  <label className="descriptionLabel">Description</label>
                  <textarea className="descriptionInput" />
                </div>
                <div className="inputLastRow">
                  <div className="selectCategoryInputWrapper">
                    <label className="selectCategoryLabel">Choose an option:</label>
                    <select id="options" name="options" className="selectCategorySelect">
                      <option value="option1">Pizza</option>
                      <option value="option2">Dessert</option>
                      <option value="option3">Noodle</option>
                      <option value="option4">Cocktails</option>
                      <option value="option4">Salad</option>
                      <option value="option4">Other</option>
                    </select>

                  </div>
                  <div className="timeInputWrapper">
                    <label className="timeLabel">time</label>
                    <input type="text" className="inputTime" required/>
                  </div>
                
                </div>
                <button className="formAddButton">Add</button>
              </div>
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
      <div
        className={`addRecipeButton ${isLoggedIn ?'displayNone':''}`}
        onClick={() => setIsOpenAddForm(!isOpenAddForm)}
      >
        <PlusIcon className="plusIcon" />
      </div>

      <div style={{ display: isLoggedIn ?"flex":'none', flexDirection: "row", }}>
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
