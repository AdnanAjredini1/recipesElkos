import { createSlice } from "@reduxjs/toolkit";

const isPostedSlice = createSlice({
  name: "isPosted",
  initialState: { isPosted: false },
  reducers: {
    setIsPosted: (state) => {
      state.isPosted = !state.isPosted;
    },
  },
});


export const isPostedActions = isPostedSlice.actions;

export default isPostedSlice;
