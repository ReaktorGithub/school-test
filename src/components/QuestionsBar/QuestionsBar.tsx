import styles from './style.module.css';
import { useAppSelector } from '../../store/store.ts';
import cn from 'classnames';
import { TQuestion } from '../../store/types.ts';
import { FC } from 'react';

const QuestionsBar: FC = () => {
  const testList = useAppSelector((state) => state.main.testList);
  const currentIndex = useAppSelector((state) => state.main.currentQuestionIndex);

  return (
    <div className={styles.root}>
      {testList.map((test: TQuestion, index) => (
        <div
          key={test._id}
          className={cn(
            styles.questionBlock,
            { [styles.current]: currentIndex === index },
            { [styles.passed]: index < currentIndex },
          )}
        />
      ))}
    </div>
  );
};

export default QuestionsBar;
