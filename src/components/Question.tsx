import { useState } from 'react';
import { AnswerStateOptions } from '../models/AnswerStateOptions';
import AnswersList from './AnswersList';
import QuestionTimer from './QuestionTimer';
import QUIZ_DATA from '../data/questions';
import { QuestionModel } from '../models/QuizModel';

interface QuestionProps {
  index: number;
  onSelectAnswer: (answer: string) => void;
  onSkipAnswer: () => void;
}

interface QuestionState {
  selectedAnswer: string;
  answerState: AnswerStateOptions;
}

const Question = ({ index, onSelectAnswer, onSkipAnswer }: QuestionProps) => {
  const [answer, setAnswer] = useState<QuestionState>({
    selectedAnswer: '',
    answerState: AnswerStateOptions.EMPTY,
  });

  const question: QuestionModel = [...QUIZ_DATA][index];

  const handleSelectAnswer = (answer: string) => {
    setAnswer({
      selectedAnswer: answer,
      answerState: AnswerStateOptions.EMPTY,
    });

    setTimeout(() => {
      console.log(question.answers[0] === answer);
      setAnswer({
        selectedAnswer: answer,
        answerState:
          question.answers[0] === answer
            ? AnswerStateOptions.CORRECT
            : AnswerStateOptions.WRONG,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  };

  return (
    <div id="question">
      <QuestionTimer timeoutInSecounds={10} onTimeout={onSkipAnswer} />
      <h2>{question.text}</h2>
      <AnswersList
        answers={question.answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answer.answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
};

export default Question;
