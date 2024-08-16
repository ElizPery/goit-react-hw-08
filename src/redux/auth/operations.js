import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const register = createAsyncThunk(
    "auth/register",
    async ({ name, email, password }, thunkAPI) => {
        try {
            const response = await axios.post("/users/signup", {
                name,
                email,
                password,
            })
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const logIn = createAsyncThunk(
    "auth/login",
    async (creds, thunkAPI) => {
        try {
            const response = await axios.post("/users/login", creds)
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);