import "./mobile-sideNav.css";
import SideNAvButton from "../SideNav/SideNavButton/SideNAvButton";
import { navSideData } from "../SideNav/sideNavData";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "../MainPage/Search/search-assets/search-svgrepo-com.svg?react";
import CloseIcon from "./mobile-sidenav-assets/close-svgrepo-com.svg?react";
import { hamburgerActions } from "../../Store/hamburgerButtonSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { isLoggedInActions } from "../../Store/isLoggedIn";


function MobileSideNav({ setSearchQuery }) {
  const navigate = useNavigate()
  const isMobile = useSelector((state) => state.hamburger.isActiveHamburger);
  const userProfile = useSelector(state => state.userProfile.user)
  const isLoggedIn = useSelector((state) => state.isLoggedIn.isLoggedIn);
  const dispatch = useDispatch();
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const onClickLogout = async () => {
     
    try {
     const response = await axios.get("https://recipe-backkllllll.vercel.app/logout", {
       headers: {
         "Content-Type": "multipart/form-data",
       },
       withCredentials: true,
     });

 
     dispatch(isLoggedInActions.setIsLoggedIn(response.data.success))
     navigate('/')
     
    } catch (err) {
     console.log(err);
     
    }
 }

  return (
    <div className={`mobileSideNavWrapper ${isMobile ? "isMobileClass" : ""}`}>
      <CloseIcon
        className="closeIcon"
        onClick={() => dispatch(hamburgerActions.setActiveHamburger())}
      />
      <p className="iconBrand">Chefie</p>
      <div className="sideNavProfileUserWrapper">
      <div
          className="profilePic"
          style={{ content: isLoggedIn ?`url("${userProfile.profilePicture}")` :"" }}
        ></div>
        <p className="profileName">{userProfile.userName}</p>
      </div>
      <div className="sideNavButtonWrapper">
        <div className="searchWrapper">
          <input
            type="search"
            className="searchInput"
            placeholder="Search recipes..."
            onChange={handleSearchChange}
          />
          <SearchIcon className="searchIcon" />
        </div>
        {navSideData.map((button) => (
          <SideNAvButton
            key={button.name}
            icon={button.icon}
            title={button.name}
          />
        ))}
        <button
          className="logOutButton"
          style={{
            width: "60%",
            color: "#ffffff",
            backgroundColor: "#febd2f",
            borderRadius: "10px",
            height: "50px",
            fontSize: "21px",
            fontWeight: "600",
            display: isLoggedIn ? "block" : "none",
            cursor: "pointer",
          }}
          onClick={() => onClickLogout()}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default MobileSideNav;
