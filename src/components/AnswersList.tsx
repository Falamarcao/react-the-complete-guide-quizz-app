import { useRef } from 'react';
import { AnswerStateOptions } from '../models/AnswerStateOptions';
import { AnswersModel } from '../models/QuizModel';

interface AnswersProps {
  answers: AnswersModel;
  selectedAnswer: string;
  answerState: AnswerStateOptions;
  onSelect: (answer: string) => void;
}

const AnswersList = ({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}: AnswersProps) => {
  const shuffledAnswers = useRef<AnswersModel>();

  // Single initialization of suffledAnswers.
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5); // shuffle array
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer: string, index: number) => {
        let buttonClassName = undefined;
        const isSelected = selectedAnswer === answer;

        if (isSelected) {
          switch (answerState) {
            case AnswerStateOptions.ANSWERED:
              buttonClassName = 'selected';
              break;
            default:
              buttonClassName = answerState;
              break;
          }
        }

        return (
          <li className="answer" key={index}>
            <button
              onClick={() => onSelect(answer)}
              className={buttonClassName}
              disabled={answerState !== AnswerStateOptions.EMPTY}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default AnswersList;
