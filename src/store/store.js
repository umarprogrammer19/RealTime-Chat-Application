import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/user.slice";

export const store = configureStore({
    reducer: {
        userReducer
    }
})