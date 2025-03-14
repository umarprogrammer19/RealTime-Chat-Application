import { createSlice } from "@reduxjs/toolkit";
import { loginUserThunk } from "./user.thunk";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        isAuthenticated: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUserThunk.fulfilled, (state, action) => { })
    }
});

export const { } = userSlice.actions;

export default userSlice.reducer;