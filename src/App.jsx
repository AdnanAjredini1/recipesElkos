import { useEffect, useState } from "react";
import MainPage from "./Components/MainPage/MainPage";
import MobileSideNav from "./Components/MobileSideNav/MobileSideNav";
import SideNav from "./Components/SideNav/SideNav";
import { useDispatch, useSelector } from "react-redux";
import { hamburgerActions } from "./Store/hamburgerButtonSlice";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { userProfileActions } from "./Store/userProfileSlice";
import { isLoggedInActions } from "./Store/isLoggedIn";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const isMobile = useSelector((state) => state.hamburger.isActiveHamburger);
  const dispatch = useDispatch();
  
  const userProfile = useSelector((state) => state.userProfile.user);

  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobile]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/auth/status", {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        });
        console.log(response.data, "response from auth status");
        dispatch(isLoggedInActions.setIsLoggedIn(response.data.loggedIn));
       
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
    <div>
      <div
        className={`${isMobile ? "backdrop" : ""}`}
        onClick={() => dispatch(hamburgerActions.setActiveHamburger())}
      ></div>
      <SideNav />
      <MobileSideNav  />
      {/* <MainPage searchQuery={searchQuery} setSearchQuery={setSearchQuery} /> */}
      <Outlet />
    </div>
  );
}

export default App;
