import styles from './style.module.css';
import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';
import { IQuestionOneAnswer } from '../../../store/types.ts';
import { useAppDispatch } from '../../../store/store.ts';
import { addAnswer, setDisableAnswer } from '../../../store/mainSlice.ts';
import { EventTypes } from '../../../utils/trigger.ts';

interface IProps {
  data: IQuestionOneAnswer;
}

const FormSingleAnswer: FC<IProps> = ({ data }) => {
  const [value, setValue] = useState<string | null>(null);

  const dispatch = useAppDispatch();

  const confirmAnswer = useCallback(() => {
    if (value === null) return;

    dispatch(
      addAnswer({
        questionId: data._id,
        answer: value,
      }),
    );
  }, [data._id, dispatch, value]);

  useEffect(() => {
    dispatch(setDisableAnswer(value === null));
  }, [dispatch, value]);

  useEffect(() => {
    document.addEventListener(EventTypes.CONFIRM_ANSWER, confirmAnswer);

    return () => {
      document.removeEventListener(EventTypes.CONFIRM_ANSWER, confirmAnswer);
    };
  }, [confirmAnswer]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      {data.options.map((option) => (
        <label className={styles.label} key={option._id}>
          <input
            className={styles.radio}
            type='radio'
            value={option._id}
            checked={value === option._id}
            onChange={handleChange}
          />
          <p>{option.text}</p>
        </label>
      ))}
    </>
  );
};

export default FormSingleAnswer;
