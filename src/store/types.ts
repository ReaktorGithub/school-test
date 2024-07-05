export interface IQuestionCommon {
  _id: string;
  question: string;
}

export interface IAnswerOption {
  _id: string;
  text: string;
}

export interface IQuestionOneAnswer extends IQuestionCommon {
  options: IAnswerOption[];
  rightAnswerId: string;
}

export interface IQuestionManyAnswers extends IQuestionCommon {
  options: IAnswerOption[];
  rightAnswerIds: string[];
}

export interface IQuestionTextarea extends IQuestionCommon {
  isShortAnswer: boolean;
}

export type TQuestion = IQuestionOneAnswer | IQuestionManyAnswers | IQuestionTextarea;

export interface IAnswer {
  questionId: string;
  answer: string | string[];
}

export interface IMainSlice {
  loading: boolean;
  timer: number;
  testList: TQuestion[];
  currentQuestionIndex: number;
  answerList: IAnswer[];
  disableAnswer: boolean;
  showStats: boolean;
}

export interface ConfigReturnType {
  testOptions: {
    maxTime: number;
  };
  testData: TQuestion[];
}
