import { configureStore } from '@reduxjs/toolkit';
import mainSlice from './mainSlice.ts';
import { useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    main: mainSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export const useAppSelector = <Return>(callback: (state: RootState) => Return) => {
  return useSelector((state: RootState) => callback(state));
};
