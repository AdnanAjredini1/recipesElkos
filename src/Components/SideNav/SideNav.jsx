import { Link, useNavigate } from "react-router-dom";
import "./side-nav.css";
import SideNAvButton from "./SideNavButton/SideNAvButton";
import { navSideData } from "./sideNavData";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { isLoggedInActions } from "../../Store/isLoggedIn";
import NotificationsIcon from "./sideNav-assets/notifications-svgrepo-com.svg?react";
import axios from "axios";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import { notificationActions } from "../../Store/notificationNumSlice";
import { io } from "socket.io-client";

// const socket = io("https://recipeback-ijkr.onrender.com", { withCredentials: true });

function SideNav() {
  const [user, setUser] = useState({
    name: "",
    profileImage: "",
  });
  const { notifications, notificationNum } = useSelector(
    (state) => state.notification
  );
  const userProfile = useSelector((state) => state.userProfile);
  const isLoggedIn = useSelector((state) => state.isLoggedIn.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

 //f

  const onClickLogout = async () => {
    try {
      const response = await axios.get("https://recipe-back-two.vercel.app/logout", {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      console.log(response);
      dispatch(isLoggedInActions.setIsLoggedIn(response.data.success));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://recipeback-ijkr.onrender.com/auth/status", {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        });

        setUser({
          name: response.data.user.username,
          profileImage: response.data.user.user_image,
        });
        // socket.emit("registerUser",response.data.user.user_id );
      } catch (err) {
        console.log(err);
      }
    };

    const fetchNotifications = async () => {
      try {
        const userId = userProfile.user?.userId;
        if (!userId) return;

        dispatch(notificationActions.resetNotifications());

        const response = await axios.get(
          `https://recipe-back-two.vercel.app/notification/${userId}`,
          {
            withCredentials: true,
          }
        );

        console.log(response.data, "Fetched notifications from API");

        if (Array.isArray(response.data)) {
          response.data.forEach((notification) => {
            dispatch(notificationActions.addNotification(notification));
          });
          const unreadNotifications = response.data.filter(
            (notification) => notification.read === false
          );

          dispatch(
            notificationActions.setNotificationNum(unreadNotifications.length)
          );
        } else {
          console.error("Unexpected response structure", response.data);
        }
      } catch (err) {
        console.error("Error fetching notifications:", err.message);
      }
    };

    fetchData();
    if (isLoggedIn) {
      fetchNotifications();
      // socket.on("newNotification", (notification) => {
      //   // dispatch(notificationActions.addNotification(notification));
      //   // dispatch(notificationActions.incrementNotificationNum());
      //   console.log(notification, "notification from S O C K E T   99999999999999999999999999999999999999999999999999 ");
        
      // });

      // return () => {
      //   socket.off("newNotification"); 
      // };
    }
  }, [isLoggedIn, userProfile.user.userId, dispatch]);

  const handleMarkAllAsRead = async () => {
    try {
      await axios.put(
        "https://recipe-back-two.vercel.app/markAsRead",
        {},
        {
          withCredentials: true,
        }
      );
      console.log("All notifications marked as read");
      dispatch(notificationActions.setNotificationNum(0));
    } catch (error) {
      console.error("Error marking notifications as read:", error);
    }
  };

  return (
    <div className="sideNavWrapper">
      <MDBDropdown
        className="notificationsWrapper"
        style={{ display: isLoggedIn ? "flex" : "none" }}
      >
        <MDBDropdownToggle
          className="me-3 hidden-arrow notificationsIconWrapper "
          onClick={handleMarkAllAsRead}
        >
          <NotificationsIcon
            width={42}
            height={42}
            className="notificationIcon"
          />
          <span className="badge rounded-pill badge-notification bg-danger notificationNum">
            {notificationNum}
          </span>
        </MDBDropdownToggle>
        <MDBDropdownMenu className="dropDownMenuWrapper">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <MDBDropdownItem
                key={`${notification.id}-${notification.type}`}
                style={{ padding: "5px 1px" }}
              >
                {notification.message}
              </MDBDropdownItem>
            ))
          ) : (
            <MDBDropdownItem>No notifications</MDBDropdownItem>
          )}
        </MDBDropdownMenu>
      </MDBDropdown>
      <p className="iconBrand">Chefie</p>
      <div className="sideNavProfileUserWrapper">
        <div
          className="profilePic"
          style={{
            content: isLoggedIn
              ? `url("${userProfile.user.profilePicture}")`
              : "",
          }}
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
