import './App.css';
import Head from './components/Head';
import { useAppDispatch } from './store/store.ts';
import { FC, useEffect } from 'react';
import { loadTestList } from './store/mainSlice.ts';
import TestBody from './components/TestBody';

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadTestList());
  }, [dispatch]);

  return (
    <>
      <Head />
      <TestBody />
    </>
  );
};

export default App;
