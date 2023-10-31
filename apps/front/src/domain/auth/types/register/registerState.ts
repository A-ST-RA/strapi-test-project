export interface IRegisterState {
    jwt?: string;
    status: 'idle' | 'pending' | 'succeeded' | 'failed';
}
