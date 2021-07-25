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

const Solution = () => {
  const [data, setData] = useState<Response>();
  const [loading, setLoading] = useState<boolean>();

  const handleStartRequest = async (e: React.SyntheticEvent) => {
    setLoading(true);
    e.preventDefault();
    const data = await fetch(
      `https://baconipsum.com/api/?type=meat-and-filler`
    );
    setData(data);
    const delay = 1000;
    await new Promise((resolve) => setTimeout(resolve, delay));
  };

  const handleFinishRequest = async (e: React.SyntheticEvent) => {
    const response = await data?.json();
    setData(response);
    setLoading(false);
  };

  console.log({ data });
  return (
    <div>
      <ProgressBar />
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
