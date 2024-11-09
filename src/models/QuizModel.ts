export type AnswersModel = string[];

export interface QuestionModel {
  id: string;
  text: string;
  answers: AnswersModel;
}

export type QuizModel = QuestionModel[];
