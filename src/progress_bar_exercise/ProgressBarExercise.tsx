import React, { useState } from "react";
import Exercise from "../exercise/Exercise";
import Button from "../components/Button/Button";
import ProgressBar from "../components/ProgressBar";

const ProgressBarExercise = () => {
  return (
    <div className="progress-bar-exercise">
      <Exercise
        solution={<Solution />}
        specsUrl="https://github.com/SpiffInc/spiff_react_exercises/issues/1"
        title="Progress Bar Exercise"
      />
    </div>
  );
};

export default ProgressBarExercise;

// ----------------------------------------------------------------------------------

const REQUEST_TIME = 20000;

const fakeRequest = (ms: number) => new Promise((r) => setTimeout(r, ms));

const Solution = () => {
  const [progressBarValue, setProgressBarValue] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleStartRequest = async () => {
    setLoading(true);

    const timer = setInterval(() => {
      setProgressBarValue((oldProgress) => {
        if (oldProgress === 90) {
          return 90;
        }

        if (oldProgress === 100) {
          clearInterval(timer);
        }
        console.log({ oldProgress });

        return Math.min(oldProgress + (oldProgress >= 100 ? 0 : 1.5));
      });
    }, 250);

    await fakeRequest(REQUEST_TIME);
    setLoading(false);
    setProgressBarValue(100);
    clearInterval(timer);
  };

  const handleFinishRequest = () => {
    setProgressBarValue(100);
    clearInterval();
    setLoading(false);
  };

  return (
    <div>
      <ProgressBar progressBarValue={progressBarValue} />
      <p>Add solution here</p>
      <Button
        variant="started"
        onClick={handleStartRequest}
        loading={loading}
      />
      <Button variant="finish" onClick={handleFinishRequest} />
    </div>
  );
};
