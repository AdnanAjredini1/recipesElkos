import { configureStore } from "@reduxjs/toolkit";
import hamburgerSlice from "./hamburgerButtonSlice";
import isLoggedInSlice from "./isLoggedIn";
import userProfileSlice from "./userProfileSlice";
import isPostedSlice from "./isPostedSlice";
import notificationSlice from "./notificationNumSlice";

const store = configureStore({
  reducer: {
    hamburger: hamburgerSlice.reducer,
    isLoggedIn: isLoggedInSlice.reducer,
    userProfile: userProfileSlice.reducer,
    isPosted: isPostedSlice.reducer,
    notification:notificationSlice.reducer,
  },
});

export default store;
