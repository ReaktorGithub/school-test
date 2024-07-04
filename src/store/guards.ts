import { IQuestionManyAnswers, IQuestionOneAnswer, IQuestionTextarea, TQuestion } from './types.ts';

export const isOneQuestion = (question: TQuestion): question is IQuestionOneAnswer => {
  return (question as IQuestionOneAnswer).rightAnswerId !== undefined;
};

export const isManyQuestion = (question: TQuestion): question is IQuestionManyAnswers => {
  return (question as IQuestionManyAnswers).rightAnswerIds !== undefined;
};

export const isTextareaQuestion = (question: TQuestion): question is IQuestionTextarea => {
  return (question as IQuestionTextarea).isShortAnswer !== undefined;
};
