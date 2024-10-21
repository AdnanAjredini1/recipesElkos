import { createSlice } from "@reduxjs/toolkit";

const isLoggedInSlice = createSlice({
  name: "isLoggedIn",
  initialState: { isLoggedIn: false },
  reducers: {
    setIsLoggedIn: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const isLoggedInActions = isLoggedInSlice.actions;

export default isLoggedInSlice;
