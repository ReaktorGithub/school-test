import styles from './style.module.css';
import { FC } from 'react';
import ConfirmButton from '../ui/ConfirmButton';
import { useAppDispatch, useAppSelector } from '../../store/store.ts';
import { setQuestionIndex } from '../../store/mainSlice.ts';
import { EventTypes, trigger } from '../../utils/trigger.ts';

const AnswerButton: FC = () => {
  const totalCount = useAppSelector((state) => state.main.testList.length);
  const currentIndex = useAppSelector((state) => state.main.currentQuestionIndex);
  const disabled = useAppSelector((state) => state.main.disableAnswer);

  const dispatch = useAppDispatch();

  const handleNextQuestion = () => {
    trigger(EventTypes.CONFIRM_ANSWER);
    dispatch(setQuestionIndex(currentIndex + 1));

    if (currentIndex >= totalCount - 1) {
      console.log('end test');
      trigger(EventTypes.STOP_TIMER);
    }
  };

  return (
    <div className={styles.root}>
      <ConfirmButton text='Ответить' onClick={handleNextQuestion} disabled={disabled} />
    </div>
  );
};

export default AnswerButton;
