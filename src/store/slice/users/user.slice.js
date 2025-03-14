import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        isAuthenticated: false,
    },
    reducers: {}
});

export const { } = userSlice.actions;

export default userSlice.reducer;