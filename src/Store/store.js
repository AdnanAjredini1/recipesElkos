import { configureStore } from "@reduxjs/toolkit";
import hamburgerSlice from "./hamburgerButtonSlice";
import isLoggedInSlice from "./isLoggedIn";
import userProfileSlice from "./userProfileSlice";

const store = configureStore({
  reducer: {
    hamburger: hamburgerSlice.reducer,
    isLoggedIn: isLoggedInSlice.reducer,
    userProfile:userProfileSlice.reducer,
  },
});

export default store;
