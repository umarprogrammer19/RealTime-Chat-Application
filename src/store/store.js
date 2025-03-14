import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/users/user.slice";

export const store = configureStore({
    reducer: {
        userReducer
    }
})