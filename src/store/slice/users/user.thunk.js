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

export const logoutUserThunk = createAsyncThunk("user/logout", async (_, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post("/v1/user/logout");
        return response.data;
    } catch (error) {
        const errorOutput = error?.response?.data?.message;
        toast.error(errorOutput);
        return rejectWithValue(errorOutput)
    }
});

export const getUserProfileThunk = createAsyncThunk("user/getProfile", async (_, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.get("/v1/user/get-profile");
        return response.data;
    } catch (error) {
        const errorOutput = error?.response?.data?.message;
        return rejectWithValue(errorOutput)
    }
});

export const getOtherUserProfileThunk = createAsyncThunk("user/getOtherUsers", async (_, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.get("/v1/user/get-other-users");
        return response.data;
    } catch (error) {
        const errorOutput = error?.response?.data?.message;
        return rejectWithValue(errorOutput)
    }
});