import styles from './style.module.css';
import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';
import { IQuestionTextarea } from '../../../store/types.ts';
import { useAppDispatch } from '../../../store/store.ts';
import { addAnswer } from '../../../store/mainSlice.ts';
import { EventTypes } from '../../../utils/trigger.ts';
import cn from 'classnames';

interface IProps {
  data: IQuestionTextarea;
}

const FormTextareaAnswer: FC<IProps> = ({ data }) => {
  const [value, setValue] = useState<string>('');

  const dispatch = useAppDispatch();

  const confirmAnswer = useCallback(() => {
    dispatch(
      addAnswer({
        questionId: data._id,
        answer: value,
      }),
    );
  }, [data._id, dispatch, value]);

  useEffect(() => {
    document.addEventListener(EventTypes.CONFIRM_ANSWER, confirmAnswer);

    return () => {
      document.removeEventListener(EventTypes.CONFIRM_ANSWER, confirmAnswer);
    };
  }, [confirmAnswer]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <textarea
      className={cn(styles.root, { [styles.resizeVertical]: !data.isShortAnswer })}
      onChange={handleChange}
      value={value}
      rows={3}
    />
  );
};

export default FormTextareaAnswer;
