import { useEffect, useState } from 'react';

interface QuestionTimerProps {
  timeoutInSecounds: number;
  onTimeout: () => void;
}

const QuestionTimer = ({
  timeoutInSecounds,
  onTimeout,
}: QuestionTimerProps) => {
  const timeoutInMilliseconds = timeoutInSecounds * 1000;
  const [remainingTime, setRemainingTime] = useState<number>(
    timeoutInMilliseconds
  );

  useEffect(() => {
    const timeout = setTimeout(onTimeout, timeoutInMilliseconds);

    return () => {
      clearTimeout(timeout);
    };
  }, [onTimeout, timeoutInMilliseconds]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      value={remainingTime}
      max={timeoutInMilliseconds}
    />
  );
};

export default QuestionTimer;
