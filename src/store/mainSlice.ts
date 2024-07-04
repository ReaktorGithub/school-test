import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IAnswer, IMainSlice, TQuestion } from './types.ts';
import { TIMER_INITIAL_SECONDS } from '../constants/constants.ts';
import axios from 'axios';

const initialState: IMainSlice = {
  loading: true,
  timer: TIMER_INITIAL_SECONDS,
  testList: [],
  currentQuestionIndex: 0,
  answerList: [],
  disableAnswer: false,
};

export const loadTestList = createAsyncThunk('config/load', async (): Promise<TQuestion[]> => {
  const result = await axios({
    method: 'GET',
    url: import.meta.env.VITE_CONFIG_FILE_PATH,
  });
  return result.data;
});

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
    decrement: (state) => {
      state.timer -= 1;
    },
    reset: (state, { payload }: PayloadAction<number>) => {
      state.timer = payload;
    },
    setQuestionIndex: (state, { payload }: PayloadAction<number>) => {
      state.currentQuestionIndex = payload;
    },
    addAnswer: (state, { payload }: PayloadAction<IAnswer>) => {
      state.answerList.push(payload);
    },
    setDisableAnswer: (state, { payload }: PayloadAction<boolean>) => {
      state.disableAnswer = payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loadTestList.fulfilled, (state, { payload }: PayloadAction<TQuestion[]>) => {
        state.testList = payload;
        state.loading = false;
      })
      .addCase(loadTestList.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadTestList.rejected, (state) => {
        console.log('Error while loading config');
        state.loading = false;
      });
  },
});

export const {
  decrement: decrementTimer,
  reset: resetTimer,
  setLoading,
  setQuestionIndex,
  addAnswer,
  setDisableAnswer,
} = mainSlice.actions;

export default mainSlice.reducer;
