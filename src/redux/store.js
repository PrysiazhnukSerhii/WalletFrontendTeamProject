import { configureStore } from '@reduxjs/toolkit';

import { authApi } from './authSlice';
import { transactionsApi } from './transactionsSlice';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [transactionsApi.reducerPath]: transactionsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    authApi.middleware,
    transactionsApi.middleware,
  ],
});
