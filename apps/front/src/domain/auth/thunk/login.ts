import api from '@/api';
import { IAuthRequest } from '../types/login/authRequest';
import { IAuthResponse } from '../types/login/authResponse';
import { createAsyncThunk } from "@reduxjs/toolkit";

const login = createAsyncThunk('auth/login', async (body: IAuthRequest) => {
    const jwt = localStorage.getItem('authToken') || '';

    if (jwt) return jwt;

    const { data } = await api.post<IAuthResponse>('/auth/local/', body);
    console.log(data);
    return data.jwt;
});

export default login;
