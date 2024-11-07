export type Answers = string[];

export interface Question {
  id: string;
  text: string;
  answers: Answers;
}

export type Quiz = Question[];
