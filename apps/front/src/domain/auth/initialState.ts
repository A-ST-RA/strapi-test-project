import { IAuthState } from "./types/authState";

const localStorageData = localStorage.getItem('authToken') || '';

export const initialState: IAuthState = {
    jwt: localStorageData,
    status: localStorageData ? 'succeeded' : 'idle',
}
