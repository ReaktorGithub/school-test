import styles from './style.module.css';
import { FC } from 'react';
import { useAppSelector } from '../../store/store.ts';
import AnswerOptionsList from '../AnswerOptionsList';

const Question: FC = () => {
  const testList = useAppSelector((state) => state.main.testList);
  const currentIndex = useAppSelector((state) => state.main.currentQuestionIndex);

  if (!testList[currentIndex]) {
    return null;
  }

  return (
    <div className={styles.root}>
      <h2>{testList[currentIndex].question}</h2>
      <AnswerOptionsList data={testList[currentIndex]} />
    </div>
  );
};

export default Question;
