// store.ts
import { configureStore } from '@reduxjs/toolkit';
import optionReducer from '@/slices/counterSlice';
import menuReducer from '@/slices/menuSlice'; // Import the menuReducer
export const store = configureStore({
  reducer: {
    option: optionReducer,
    menutoggle: menuReducer, // Use the menuReducer instead of toggleOption
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
