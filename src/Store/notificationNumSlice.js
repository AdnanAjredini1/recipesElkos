import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notificationSlice",
  initialState: {
    notificationNum: 0,
    notifications: [],
  },
  reducers: {
    addNotification: (state, action) => {
    //   state.notificationNum += 1;
      state.notifications.push(action.payload);
    },
    removeNotification: (state) => {
      if (state.notificationNum > 0) {
        state.notificationNum -= 1;
        state.notifications.pop();
      }
    },
    removeAllNotifications: (state) => {
      state.notificationNum = 0;
      state.notifications = [];
    },
    resetNotifications: (state) => {
      state.notificationNum = 0;
      state.notifications = [];
    },

    setNotificationNum(state, action) {
        state.notificationNum = action.payload;
    },
  },
});

export const notificationActions = notificationSlice.actions;
export default notificationSlice;
