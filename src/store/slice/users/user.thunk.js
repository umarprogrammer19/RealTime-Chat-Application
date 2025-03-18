import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { axiosInstance } from "../../../utilities/axiosInstance";

export const loginUserThunk = createAsyncThunk("user/login", async ({ username, password }, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post("/v1/user/login", {
            username,
            password
        });
        return response.data;
    } catch (error) {
        const errorOutput = error?.response?.data?.message;
        toast.error(errorOutput);
        return rejectWithValue(errorOutput);
    }
});

export const registerUserThunk = createAsyncThunk("user/register", async ({ fullname, username, password, gender, avatar }, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post("/v1/user/register", {
            fullname,
            username,
            password,
            gender,
            avatar: avatar && avatar,
        });
        return response.data;
    } catch (error) {
        const errorOutput = error?.response?.data?.message;
        toast.error(errorOutput);
        return rejectWithValue(errorOutput)
    }
});