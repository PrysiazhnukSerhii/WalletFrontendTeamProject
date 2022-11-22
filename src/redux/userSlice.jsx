import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authApi } from './authSlice';
import { transactionsApi } from './transactionsSlice';

const initialState = {
  user: { name: '', email: '', balance: '' },
  token: null,
  isLoggedIn: false,
  financeData: null,
};

export const userSlice = createSlice({
  name: 'userInformation',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.signUpUser.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
      }
    );
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
      }
    );
    builder.addMatcher(
      authApi.endpoints.logOut.matchFulfilled,
      (state, { payload }) => {
        state.token = null;
        state.user = null;
        state.balance = null;
        state.isLoggedIn = false;
      }
    );
    // взнати що буде приходить в пеілоад ций
    builder.addMatcher(
      transactionsApi.endpoints.getStatistics.matchFulfilled,
      (state, { payload }) => {
        return (state.financeData = payload[0]);
      }
    );
  },
});

export default userSlice.reducer;

//------------------------persist-----------

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

export const persistedReducer = persistReducer(
  persistConfig,
  userSlice.reducer
);
