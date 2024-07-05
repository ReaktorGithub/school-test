import styles from './style.module.css';
import { useAppDispatch, useAppSelector } from '../../store/store.ts';
import formatTime from '../../utils/formatTime.ts';
import { FC, useEffect, useRef } from 'react';
import { decrementTimer, setShowStats } from '../../store/mainSlice.ts';
import cn from 'classnames';
import { TIMER_WARNING_SECONDS } from '../../constants/constants.ts';
import { EventTypes } from '../../utils/trigger.ts';

const Head: FC = () => {
  const time = useAppSelector((state) => state.main.timer);
  const dispatch = useAppDispatch();
  const timerRef = useRef<NodeJS.Timeout>();

  const handleStopTimer = () => {
    clearInterval(timerRef.current);
  };

  useEffect(() => {
    document.addEventListener(EventTypes.STOP_TIMER, handleStopTimer);

    return () => {
      handleStopTimer();
      document.removeEventListener(EventTypes.STOP_TIMER, handleStopTimer);
    };
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      dispatch(decrementTimer());
    }, 1000);
  }, [dispatch]);

  useEffect(() => {
    if (time <= 0) {
      handleStopTimer();
      dispatch(setShowStats(true));
    }
  }, [dispatch, time]);

  return (
    <div className={styles.root}>
      <h1>Тестирование</h1>
      <div
        className={cn(
          styles.timerBox,
          { [styles.timerOver]: time <= 0 },
          { [styles.timerWarning]: time <= TIMER_WARNING_SECONDS },
        )}
      >
        <p>{formatTime(time)}</p>
      </div>
    </div>
  );
};

export default Head;
