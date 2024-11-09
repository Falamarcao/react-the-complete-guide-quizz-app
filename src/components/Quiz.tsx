import { useCallback, useState } from 'react';

import { Question, Answers } from '../models/Quiz';

import QUIZ_DATA from '../data/questions';
import Summary from './Summary';
import QuestionTimer from './QuestionTimer';

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState<Answers>([]);

  const currentQuestionIndex = userAnswers.length;

  const question: Question = QUIZ_DATA[currentQuestionIndex];

  const isComplete = currentQuestionIndex === QUIZ_DATA.length;

  const handleSelectAnswer = useCallback((selectedAnswer: string) => {
    setUserAnswers((prevAnswers: Answers) => [...prevAnswers, selectedAnswer]);
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(''),
    [handleSelectAnswer]
  );

  if (isComplete) return <Summary />;

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={currentQuestionIndex}
          timeoutInSecounds={10}
          onTimeout={handleSkipAnswer}
        />
        <h2>{question.text}</h2>
      </div>
      <ul id="answers">
        {question.answers
          .sort(() => Math.random() - 0.5) // shuffle array
          .map((answer: string, index: number) => (
            <li className="answer" key={index}>
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Quiz;
