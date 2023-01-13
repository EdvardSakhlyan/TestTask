import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import contentReducer from '../features/content/contentSlice';

export const store = configureStore({
  reducer: {
    contentReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
