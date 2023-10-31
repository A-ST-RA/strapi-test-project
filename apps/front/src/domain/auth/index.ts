import authReducers from './slice';
import login from './thunk/login';
import register from './thunk/register';

export const extraAuthActions = { login, register };

export default authReducers;
