import { configureStore } from '@reduxjs/toolkit';
import stopwatchReducer from './stopwatchSlice';

export const store = configureStore({
  reducer: {
    // Define a top-level state field named `stopwatch`, handled by `stopwatchReducer`
    stopwatch: stopwatchReducer,
  },
});
