import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messages: null,
}

const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    }
});

export const { } = messageSlice.actions;

export default messageSlice.reducer;