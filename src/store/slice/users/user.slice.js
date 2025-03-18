import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getUserProfileThunk, loginUserThunk, logoutUserThunk, registerUserThunk } from "./user.thunk";

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
            state.isAuthenticated = true;
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
            state.isAuthenticated = true;
            toast.success(action.payload.message);
        });
        builder.addCase(registerUserThunk.rejected, (state, action) => {
            state.buttonLoading = false;
        });
        // Logout Cases
        builder.addCase(logoutUserThunk.pending, (state, action) => {
            state.buttonLoading = true;
        });
        builder.addCase(logoutUserThunk.fulfilled, (state, action) => {
            state.userProfile = null;
            state.isAuthenticated = false;
            state.buttonLoading = false;
            toast.success(action.payload.message);
        });
        builder.addCase(logoutUserThunk.rejected, (state, action) => {
            state.buttonLoading = false;
        });
        // Get User Profile
        builder.addCase(getUserProfileThunk.pending, (state, action) => {
            state.screenLoading = true;
        });
        builder.addCase(getUserProfileThunk.fulfilled, (state, action) => {
            // state.userProfile = null;
            state.isAuthenticated = true;
            state.screenLoading = false;
            console.log(action.payload);
        });
        builder.addCase(getUserProfileThunk.rejected, (state, action) => {
            state.screenLoading = false;
        });
    }
});

export const { } = userSlice.actions;

export default userSlice.reducer;