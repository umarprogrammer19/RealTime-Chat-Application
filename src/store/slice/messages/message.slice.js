import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
});

export const { } = messageSlice.actions;

export default messageSlice.reducer;