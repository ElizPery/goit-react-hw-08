import { createSlice } from "@reduxjs/toolkit";
import { register } from "./operations";

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
    }
    
})

export default authSlice.reducer;