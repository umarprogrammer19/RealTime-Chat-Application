import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../utilities/axiosInstance";

export const sendMessageThunk = createAsyncThunk("message/send", async ({ receiverId, message }, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post(`/api/v2/message/send/${receiverId}`, { message });
        return response.data;
    } catch (error) {
        const errorOutput = error?.response?.data?.message;
        toast.error(errorOutput);
        return rejectWithValue(errorOutput);
    }
});

export const getMessageThunk = createAsyncThunk("message/get", async ({ participantId }, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.get(`/api/v2/get-message/send/${participantId}`);
        return response.data;
    } catch (error) {
        const errorOutput = error?.response?.data?.message;
        toast.error(errorOutput);
        return rejectWithValue(errorOutput);
    }
});