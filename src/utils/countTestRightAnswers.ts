import { IAnswer, TQuestion } from '../store/types.ts';
import { isManyQuestion, isOneQuestion, isTextareaQuestion } from '../store/guards.ts';
import compareArrays from './compareArrays.ts';

const countTestRightAnswers = (testList: TQuestion[], answerList: IAnswer[]): number => {
  return testList.reduce((count, current) => {
    const answer = answerList.find((item) => item.questionId === current._id)?.answer || '';
    if (isOneQuestion(current)) {
      if (current.rightAnswerId === answer) {
        return count + 1;
      }
    }

    if (isManyQuestion(current) && Array.isArray(answer)) {
      if (compareArrays(current.rightAnswerIds, answer)) {
        return count + 1;
      }
    }

    if (isTextareaQuestion(current)) {
      if (answer.length > 0) {
        return count + 1;
      }
    }

    return count;
  }, 0);
};

export default countTestRightAnswers;
