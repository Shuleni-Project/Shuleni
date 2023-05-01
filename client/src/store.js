import { configureStore } from '@reduxjs/toolkit';
import userReducer from './State/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;

