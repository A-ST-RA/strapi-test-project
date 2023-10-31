import authReducers from './slice';
import login from './thunk/login';

export const extraAuthActions = { login };

export default authReducers;
