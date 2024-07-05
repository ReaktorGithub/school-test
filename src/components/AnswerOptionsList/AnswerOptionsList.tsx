import styles from './style.module.css';
import { FC } from 'react';
import { TQuestion } from '../../store/types.ts';
import { isManyQuestion, isOneQuestion, isTextareaQuestion } from '../../store/guards.ts';
import FormSingleAnswer from '../form/FormSingleAnswer';
import FormManyAnswers from '../form/FormManyAnswers';
import FormTextareaAnswer from '../form/FormTextareaAnswer';

interface IProps {
  data: TQuestion;
}

const AnswerOptionsList: FC<IProps> = ({ data }) => {
  if (isOneQuestion(data)) {
    return (
      <div className={styles.root}>
        <FormSingleAnswer data={data} key={data._id} />
      </div>
    );
  }

  if (isManyQuestion(data)) {
    return (
      <div className={styles.root}>
        <FormManyAnswers data={data} key={data._id} />
      </div>
    );
  }

  if (isTextareaQuestion(data)) {
    return (
      <div className={styles.root}>
        <FormTextareaAnswer data={data} key={data._id} />
      </div>
    );
  }

  return null;
};

export default AnswerOptionsList;
