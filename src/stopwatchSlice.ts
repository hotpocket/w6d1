import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  running: false,
  time: 0,
};

export type StopWatchState = {
  running: boolean,
  time: number
};

export type StopWatchSlice = {
  stopwatch: StopWatchState
};

export const stopwatchSlice = createSlice({
  name: 'stopwatch',
  initialState,
  reducers: {
    toggleRunning: (state) => {
      // console.log('toggling running');
      state.running = !state.running;
    },
    reset: (state) => {
      // console.log('resetting');
      state.time = 0;
      state.running = false;
    },
    incrementTime: (state) => {
      // console.log('incrementing time');
      state.time += 1;
    },
    setTime: (state, action) => {
      state.time = action.payload;
    }
  },
});

export const { toggleRunning, reset, incrementTime } = stopwatchSlice.actions;
// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof stopwatchSlice.getInitialState>

export default stopwatchSlice.reducer;