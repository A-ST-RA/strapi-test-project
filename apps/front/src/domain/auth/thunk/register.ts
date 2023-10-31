import api from '@/api';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IRegisterRequest } from '../types/register/registerRequest';
import { IRegisterResponse } from '../types/register/registerResponse';

const register = createAsyncThunk('auth/reg', async (body: IRegisterRequest) => {
    const jwt = localStorage.getItem('authToken') || '';

    if (jwt) return jwt;

    const { data } = await api.post<IRegisterResponse>('/auth/local/register', body);
    console.log(data);
    return data.jwt;
});

export default register;
