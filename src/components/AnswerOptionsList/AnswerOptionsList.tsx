import styles from './style.module.css';
import { FC } from 'react';
import { TQuestion } from '../../store/types.ts';
import { isManyQuestion, isOneQuestion, isTextareaQuestion } from '../../store/guards.ts';
import FormSingleAnswer from '../form/FormSingleAnswer';

interface IProps {
  data: TQuestion;
}

const AnswerOptionsList: FC<IProps> = ({ data }) => {
  if (isOneQuestion(data)) {
    return (
      <div className={styles.root}>
        <FormSingleAnswer data={data} />
      </div>
    );
  }

  if (isManyQuestion(data)) {
    return <div className={styles.root}>isManyQuestion</div>;
  }

  if (isTextareaQuestion(data)) {
    return <div className={styles.root}>isTextareaQuestion</div>;
  }

  return null;
};

export default AnswerOptionsList;
