import { useCallback, useState } from 'react';

import { AnswersModel } from '../models/QuizModel';

import QUIZ_DATA from '../data/questions';

import Summary from './Summary';

import Question from './Question';

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState<AnswersModel>([]);

  // if not answered yet,
  const currentQuestionIndex = userAnswers.length;

  const isComplete = currentQuestionIndex === QUIZ_DATA.length;

  const handleSelectAnswer = useCallback((selectedAnswer: string) => {
    setUserAnswers((prevAnswers: AnswersModel) => [
      ...prevAnswers,
      selectedAnswer,
    ]);
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(''),
    [handleSelectAnswer]
  );

  if (isComplete) return <Summary />;

  return (
    <div id="quiz">
      <Question
        key={currentQuestionIndex}
        index={currentQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
};

export default Quiz;
