import { configureStore } from '@reduxjs/toolkit'

import authReducers from '@/domain/auth';

export const store = configureStore({
  reducer: {
    auth: authReducers.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch