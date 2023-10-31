export interface IAuthState {
    jwt?: string;
    status: 'idle' | 'pending' | 'succeeded' | 'failed';
}
