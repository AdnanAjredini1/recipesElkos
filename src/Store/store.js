import { configureStore } from "@reduxjs/toolkit";
import hamburgerSlice from "./hamburgerButtonSlice";
import isLoggedInSlice from "./isLoggedIn";
import userProfileSlice from "./userProfileSlice";
import isPostedSlice from "./isPostedSlice";

const store = configureStore({
  reducer: {
    hamburger: hamburgerSlice.reducer,
    isLoggedIn: isLoggedInSlice.reducer,
    userProfile: userProfileSlice.reducer,
    isPosted: isPostedSlice.reducer,
  },
});

export default store;
