import { createSlice } from "@reduxjs/toolkit";
import { loginUserThunk } from "./user.thunk";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        isAuthenticated: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUserThunk.pending, (state, action) => {
            console.log("pending");
        });
        builder.addCase(loginUserThunk.fulfilled, (state, action) => {
            console.log("fullfilled");
        });
        builder.addCase(loginUserThunk.rejected, (state, action) => {
            console.log("rejected");
        });
    }
});

export const { } = userSlice.actions;

export default userSlice.reducer;