import React from "react";
import styles from "./ProgressBar.module.scss";

type ProgressBarProps = {
  progressBarValue: any;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ progressBarValue }) => {
  return (
    <div
      className={`${styles.progressBar}`}
      style={{
        width: `${progressBarValue}%`,
        opacity: `${progressBarValue === 100 ? "0" : "1"}`,
      }}
    ></div>
  );
};

export default ProgressBar;
