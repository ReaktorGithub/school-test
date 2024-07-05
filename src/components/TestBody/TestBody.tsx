import { FC } from 'react';
import { useAppSelector } from '../../store/store.ts';
import ShowStats from '../ShowStats';
import QuestionsBar from '../QuestionsBar';
import Question from '../Question';
import AnswerButton from '../AnswerButton';

const TestBody: FC = () => {
  const showStats = useAppSelector((state) => state.main.showStats);

  if (showStats) {
    return <ShowStats />;
  }

  return (
    <>
      <QuestionsBar />
      <Question />
      <AnswerButton />
    </>
  );
};

export default TestBody;
