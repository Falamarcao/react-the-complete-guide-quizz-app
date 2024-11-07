import quizComplete from '../assets/quiz-complete.png';

const Summary = () => {
  return (
    <div id="summary">
      <img src={quizComplete} alt="Trophy Icon" />
      <h2>Quiz COmpleted!</h2>
    </div>
  );
};

export default Summary;
