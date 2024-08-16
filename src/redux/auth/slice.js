import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, register } from "./operations";

const handlePending = (state) => {
    state.isLoading = true
}

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {
            name: null,
            email: null,
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, handlePending)
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoading = false;
                state.isLoggedIn = true;
                state.error = null;
            })
            .addCase(register.rejected, handleRejected)
            .addCase(logIn.pending, handlePending)
            .addCase(logIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoading = false;
                state.isLoggedIn = true;
                state.error = null;
            })
            .addCase(logIn.rejected, handleRejected)
            .addCase(logOut.pending, handlePending)
            .addCase(logOut.fulfilled, (state) => {
                state.user = {
                    name: null,
                    email: null,
                };
                state.token = null;
                state.isLoading = false;
                state.isLoggedIn = false;
                state.error = null;
            })
            .addCase(logOut.rejected, (state, action) => {
                state.user = {
                    name: null,
                    email: null,
                };
                state.token = null;
                state.isLoading = false;
                state.isLoggedIn = false;
                state.error = action.payload;
            })
    }
    
})

export default authSlice.reducer;