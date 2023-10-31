import { initialState } from './initialState';
import { createSlice } from "@reduxjs/toolkit";
import login from './thunk/login';
import register from './thunk/register';

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

        builder.addCase(register.pending, (state) => {
            state.status = 'pending';
        });

        builder.addCase(register.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.jwt = action.payload;

            localStorage.setItem('authToken', action.payload);            
        });

        builder.addCase(register.rejected, (state) => {
            state.status = 'failed';
        });
    },
});

export default authSlice;