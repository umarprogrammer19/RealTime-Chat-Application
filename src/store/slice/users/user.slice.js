import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        isAuthenticated: false,
    },
    reducers: {},
    extraReducers: (builder) => { 
        
    }
});

export const { } = userSlice.actions;

export default userSlice.reducer;