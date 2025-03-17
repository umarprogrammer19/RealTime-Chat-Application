import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const loginUserThunk = createAsyncThunk("user/login", async () => {
    try {

    } catch (error) {
        toast.error(error.message);
    }
});