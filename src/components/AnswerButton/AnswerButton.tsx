import styles from './style.module.css';
import { FC } from 'react';
import ConfirmButton from '../ui/ConfirmButton';
import { useAppDispatch, useAppSelector } from '../../store/store.ts';
import { setQuestionIndex, setShowStats } from '../../store/mainSlice.ts';
import { trigger } from '../../utils/trigger.ts';
import { EventTypes } from '../../constants/enums.ts';

const AnswerButton: FC = () => {
  const totalCount = useAppSelector((state) => state.main.testList.length);
  const currentIndex = useAppSelector((state) => state.main.currentQuestionIndex);
  const disabled = useAppSelector((state) => state.main.disableAnswer);

  const dispatch = useAppDispatch();

  const handleNextQuestion = () => {
    trigger(EventTypes.CONFIRM_ANSWER);
    dispatch(setQuestionIndex(currentIndex + 1));

    if (currentIndex >= totalCount - 1) {
      trigger(EventTypes.STOP_TIMER);
      dispatch(setShowStats(true));
    }
  };

  return (
    <div className={styles.root}>
      <ConfirmButton text='Ответить' onClick={handleNextQuestion} disabled={disabled} />
    </div>
  );
};

export default AnswerButton;
