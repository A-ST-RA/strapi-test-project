import { IAuthState } from "./types/login/authState";

const localStorageData = localStorage.getItem('authToken') || '';

export const initialState: IAuthState = {
    jwt: localStorageData,
    status: localStorageData ? 'succeeded' : 'idle',
}
