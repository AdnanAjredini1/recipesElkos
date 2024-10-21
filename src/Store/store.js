import { configureStore } from "@reduxjs/toolkit";
import hamburgerSlice from "./hamburgerButtonSlice";
import isLoggedInSlice from "./isLoggedIn";

const store = configureStore({
  reducer: {
    hamburger: hamburgerSlice.reducer,
    isLoggedIn: isLoggedInSlice.reducer,
  },
});

export default store;
