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
import { useEffect, useState } from "react";
import axios from "axios";
import { userProfileActions } from "../../../Store/userProfileSlice";
import { isPostedActions } from "../../../Store/isPostedSlice";

function Search({ setSearchQuery }) {
  const isActiveHamburger = useSelector(
    (state) => state.hamburger.isActiveHamburger
  );
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.userProfile.user);
  const isPosted = useSelector(state => state.isPosted.isPosted);
  console.log(isPosted, "isPosted there =============================  ================= ========================");
  

  console.log(userProfile.userName, "usernam from userProfileSlice");

  const [isOpenAddForm, setIsOpenAddForm] = useState(false);
  const [formInput, setFormInput] = useState({
    title: "",
    image: null,
    category: "Pizza",
    cookingTime: "",
    description: "",
  });

  const [userProfileImage, setUserProfileImage] = useState("");

  const isLoggedIn = useSelector((state) => state.isLoggedIn.isLoggedIn);
  

 

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormInput((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };


  const onAddHandler = () => {
    dispatch(isPostedActions.setIsPosted());
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", formInput.title);
    formData.append("image", formInput.image);
    formData.append("category", formInput.category);
    formData.append("cookingTime", formInput.cookingTime);
    formData.append("description", formInput.description);

    try {
      const response = await axios.post(
        "https://recipe-back-g3egkkkkkkk.vercel.app/api/posts",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      console.log("Response:", response.data);

      setFormInput({
        title: "",
        image: null,
        category: "Pizza",
        cookingTime: "",
        description: "",
      });
    } catch (error) {
      console.error("Error submitting the form:", error);
    } finally {
      setIsOpenAddForm(false);
    }
  };

  console.log(formInput);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://recipe-back-g3egkkkkkkk.vercel.app/auth/status", {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        });
        console.log(response.data, "response from auth status");
        dispatch(isLoggedInActions.setIsLoggedIn(response.data.loggedIn));
        setUserProfileImage(response.data.user.user_image);
        dispatch(
          userProfileActions.setUserProfile({
            userName: response.data.user.username,
            profilePicture: response.data.user.user_image,
            userId: response.data.user.user_id,
          })
        );
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);



  return (
    <div className="searchLogginWrapper">
      {/* <div >
        <img src={userProfileImage} width={80} height={80} />
      </div> */}
      {isOpenAddForm &&
        createPortal(
          <div className="addRecipeWrapper">
            <form className="addRecipeForm" onSubmit={handleSubmit}>
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
                      placeholder="food name"
                      name="title"
                      className="inputTitleAddRecipe"
                      value={formInput.title}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="imageInputWrapper">
                    <label className="imageLabel">Upload an image</label>
                    <input
                      type="file"
                      name="image"
                      className="imageInput"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="inputLastRow">
                  <div className="selectCategoryInputWrapper">
                    <label className="selectCategoryLabel">
                      Choose an option:
                    </label>
                    <select
                      id="options"
                      name="category"
                      value={formInput.category}
                      onChange={handleChange}
                      className="selectCategorySelect"
                    >
                      <option value="Pizza">Pizza</option>
                      <option value="Dessert">Dessert</option>
                      <option value="Noodle">Noodle</option>
                      <option value="Cocktails">Cocktails</option>
                      <option value="Salad">Salad</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="timeInputWrapper">
                    <label className="timeLabel">Time</label>
                    <input
                      type="text"
                      className="inputTime"
                      maxLength="2"
                      name="cookingTime"
                      value={formInput.value}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="descriptionInputWrapper">
                  <label className="descriptionLabel" name="content">
                    Description
                  </label>
                  <textarea
                    className="descriptionInput"
                    value={formInput.description}
                    name="description"
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="formAddButton" onClick={onAddHandler}>Add</button>
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
        className={`addRecipeButton ${isLoggedIn ? "" : "displayNone"}`}
        onClick={() => setIsOpenAddForm(!isOpenAddForm)}
      >
        <PlusIcon className="plusIcon" />
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <Link to="/new/login">
          <div
            className="logginButtonWrapper"
            style={{ display: isLoggedIn ? "none" : "flex" }}
          >
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
