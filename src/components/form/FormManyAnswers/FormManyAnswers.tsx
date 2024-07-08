import styles from './style.module.css';
import { FC, useCallback, useEffect, useState } from 'react';
import { IQuestionManyAnswers } from '../../../store/types.ts';
import { useAppDispatch } from '../../../store/store.ts';
import { addAnswer, setDisableAnswer } from '../../../store/mainSlice.ts';
import putValueToArray from '../../../utils/putValueToArray.ts';
import { EventTypes } from '../../../constants/enums.ts';

interface IProps {
  data: IQuestionManyAnswers;
}

const FormManyAnswers: FC<IProps> = ({ data }) => {
  const [value, setValue] = useState<string[]>([]);

  const dispatch = useAppDispatch();

  const confirmAnswer = useCallback(() => {
    dispatch(
      addAnswer({
        questionId: data._id,
        answer: value,
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data._id, value]);

  useEffect(() => {
    dispatch(setDisableAnswer(value.length === 0));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  useEffect(() => {
    document.addEventListener(EventTypes.CONFIRM_ANSWER, confirmAnswer);

    return () => {
      document.removeEventListener(EventTypes.CONFIRM_ANSWER, confirmAnswer);
    };
  }, [confirmAnswer]);

  const handleChange = (id: string) => {
    setValue((prev) => putValueToArray([...prev], id));
  };

  return data.options.map((option) => (
    <label className={styles.label} key={option._id}>
      <input
        className={styles.radio}
        type='checkbox'
        value={option._id}
        checked={value.includes(option._id)}
        onChange={() => handleChange(option._id)}
      />
      <p>{option.text}</p>
    </label>
  ));
};

export default FormManyAnswers;
