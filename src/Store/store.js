import { configureStore } from "@reduxjs/toolkit";
import hamburgerSlice from "./hamburgerButtonSlice";

const store = configureStore({
  reducer: { hamburger: hamburgerSlice.reducer },
});

export default store;
