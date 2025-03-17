import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { axiosInstance } from "../../../utilities/axiosInstance";

export const loginUserThunk = createAsyncThunk("user/login", async ({ username, password }, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post("/v1/user/login", {
            username,
            password
        });
        console.log(response);
        return response.data;
    } catch (error) {
        toast.error(error.message);
        // return rejectWithValue(error.message);
    }
});