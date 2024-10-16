import { createSlice } from "@reduxjs/toolkit";

const hamburgerSlice = createSlice({
    name:"hamburger",
    initialState:{isActiveHamburger:false},
    reducers: {
        setActiveHamburger: (state) => {
            state.isActiveHamburger = !state.isActiveHamburger;
        }
    }
});

export const hamburgerActions = hamburgerSlice.actions;

export default hamburgerSlice;

