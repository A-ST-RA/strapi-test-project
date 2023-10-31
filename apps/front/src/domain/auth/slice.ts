import { initialState } from './initialState';
import { createSlice } from "@reduxjs/toolkit";
import login from './thunk/login';

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.status = 'pending';
        });

        builder.addCase(login.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.jwt = action.payload;

            localStorage.setItem('authToken', action.payload);            
        });

        builder.addCase(login.rejected, (state) => {
            state.status = 'failed';
        });
    },
});

export default authSlice;