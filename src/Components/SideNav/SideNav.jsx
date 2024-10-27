import { Link, useNavigate } from "react-router-dom";
import "./side-nav.css";
import SideNAvButton from "./SideNavButton/SideNAvButton";
import { navSideData } from "./sideNavData";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { isLoggedInActions } from "../../Store/isLoggedIn";
import axios from "axios";

function SideNav() {
  const [user, setUser] = useState({
    name: "",
    profileImage: "",
  });
  const userProfile = useSelector(state => state.userProfile)
  const isLoggedIn = useSelector((state) => state.isLoggedIn.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickLogout = async () => {
     
     try {
      const response = await axios.get("http://localhost:3001/logout", {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      console.log(response);
      dispatch(isLoggedInActions.setIsLoggedIn(response.data.success))
      navigate('/')
      
     } catch (err) {
      console.log(err);
      
     }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/auth/status", {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        });
        console.log(response.data, "response from auth status sidenav");

        setUser({
          name: response.data.user.username,
          profileImage: response.data.user.user_image,
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="sideNavWrapper">
      <p className="iconBrand">Chefie</p>
      <div className="sideNavProfileUserWrapper">
        <div
          className="profilePic"
          style={{ content: isLoggedIn ?`url("${userProfile.user.profilePicture}")` :"" }}
        ></div>
        <p
          className="profileName"
          style={{ display: isLoggedIn ? "flex" : "none" }}
        >
          {userProfile.user.userName}
        </p>
      </div>
      <div className="sideNavButtonWrapper">
        {navSideData.map((button) => (
          <Link
            to={button.to}
            key={button.name}
            className="linkSideNavButtons"
            style={{ textDecoration: "none" }}
          >
            <SideNAvButton
              key={button.name}
              icon={button.icon}
              title={button.name}
            />
          </Link>
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

export default SideNav;
