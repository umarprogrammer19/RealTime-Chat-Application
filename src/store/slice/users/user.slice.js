import { createSlice } from "@reduxjs/toolkit";
import { loginUserThunk, registerUserThunk } from "./user.thunk";
import { toast } from "react-toastify";

const initialState = {
    isAuthenticated: false,
    screenLoading: false,
    userProfile: null,
    buttonLoading: false,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Login Cases
        builder.addCase(loginUserThunk.pending, (state, action) => {
            state.buttonLoading = true;
        });
        builder.addCase(loginUserThunk.fulfilled, (state, action) => {
            state.userProfile = action.payload.user;
            state.buttonLoading = false;
            toast.success(action.payload.message);
        });
        builder.addCase(loginUserThunk.rejected, (state, action) => {
            state.buttonLoading = false;
        });
        // Register Cases
        builder.addCase(registerUserThunk.pending, (state, action) => {
            state.buttonLoading = true;
        });
        builder.addCase(registerUserThunk.fulfilled, (state, action) => {
            state.userProfile = action.payload.newUser;
            state.buttonLoading = false;
            toast.success(action.payload.message);
        });
        builder.addCase(registerUserThunk.rejected, (state, action) => {
            state.buttonLoading = false;
        })
    }
});

export const { } = userSlice.actions;

export default userSlice.reducer;