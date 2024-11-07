import { useState } from 'react';
import { Question, Answers } from '../models/Quiz';
import QUIZ_DATA from '../data/questions';

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState<Answers>([]);

  const currentQuestionIndex = userAnswers.length;

  const question: Question = QUIZ_DATA[currentQuestionIndex];

  const handleSelectAnswer = (selectedAnswer: string) => {
    setUserAnswers((prevAnswers: Answers) => [...prevAnswers, selectedAnswer]);
  };

  return (
    <div id="quiz">
      <div id="question">
        <progress value={currentQuestionIndex} max={userAnswers.length} />
        <h2>{question.text}</h2>
      </div>
      <ul id="answers">
        {question.answers.map((answer: string, index: number) => (
          <li className="answer" key={index}>
            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;
