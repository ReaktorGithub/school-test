import './App.css';
import Head from './components/Head';
import { useAppDispatch } from './store/store.ts';
import { useEffect } from 'react';
import { loadTestList } from './store/mainSlice.ts';
import QuestionsBar from './components/QuestionsBar';
import Question from './components/Question';
import AnswerButton from './components/AnswerButton';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadTestList());
  }, [dispatch]);

  return (
    <>
      <Head />
      <QuestionsBar />
      <Question />
      <AnswerButton />
    </>
  );
}

export default App;
