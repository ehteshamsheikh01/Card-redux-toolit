import { configureStore } from "@reduxjs/toolkit";

import cardReducer from "../reducers/CardSlice";


export const store = configureStore({
    reducer:{
        card:cardReducer
    }
})