import React from "react";
import styles from "./ProgressBar.module.scss";

type ProgressBarProps = {
  progressBarValue: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ progressBarValue }) => {
  return (
    <div
      data-testid="progressBar"
      className={styles.progressBar}
      style={{
        width: `${progressBarValue}%`,
        opacity: `${progressBarValue === 100 ? "0" : "1"}`,
        transition: `width 150ms ease-in, opacity 400ms ease`,
      }}
    />
  );
};

export default ProgressBar;
