import { createSlice } from "@reduxjs/toolkit";

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState: { user: { userName: "", profilePicture: "", userId: "" } },
  reducers: {
    setUserProfile: (state, action) => {
      state.user = {
        userName: action.payload.userName,
        profilePicture: action.payload.profilePicture,
        userId: action.payload.userId,
      };
    },
  },
});

export const userProfileActions = userProfileSlice.actions;

export default userProfileSlice;
