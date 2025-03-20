import { createSlice } from "@reduxjs/toolkit";
import { getMessageThunk, sendMessageThunk } from "./message.thunk";

const initialState = {
    messages: null,
    loading: false,
    buttonLoading: false,
}

const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Send Message
        builder.addCase(sendMessageThunk.pending, (state, action) => {
            state.buttonLoading = true;
        });
        builder.addCase(sendMessageThunk.fulfilled, (state, action) => {
            state.messages = [...state.messages, action.payload?.newMessage];
            state.buttonLoading = false;
        });
        builder.addCase(sendMessageThunk.rejected, (state, action) => {
            state.buttonLoading = true;
        });
        // Get Messages
        builder.addCase(getMessageThunk.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getMessageThunk.fulfilled, (state, action) => {
            state.messages = action.payload?.conversation?.messages;
            state.loading = false;
        });
        builder.addCase(getMessageThunk.rejected, (state, action) => {
            state.loading = true;
        });
    }
});

export const { } = messageSlice.actions;

export default messageSlice.reducer;