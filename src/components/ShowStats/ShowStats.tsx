import styles from './style.module.css';
import { FC } from 'react';
import { useAppSelector } from '../../store/store.ts';
import countTestRightAnswers from '../../utils/countTestRightAnswers.ts';

const ShowStats: FC = () => {
  const timer = useAppSelector((state) => state.main.timer);
  const testList = useAppSelector((state) => state.main.testList);
  const answerList = useAppSelector((state) => state.main.answerList);

  return (
    <div className={styles.root}>
      {timer <= 0 ? (
        <p>Тест не пройден. Время вышло!</p>
      ) : (
        <>
          <h3 className={styles.heading}>Статистика:</h3>
          <p>
            Всего вопросов: <span className={styles.value}>{testList.length}</span>
          </p>
          <p>
            Правильных ответов:{' '}
            <span className={styles.value}>{countTestRightAnswers(testList, answerList)}</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ShowStats;
