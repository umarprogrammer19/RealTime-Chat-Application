import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/user.slice";

export const store = configureStore({
    reducer: {
        userSlice
    }
})