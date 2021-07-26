import React, { useEffect, useState } from "react";
import styles from "./ProgressBar.module.scss";

type ProgressBarProps = {
  progressBarValue: any;
  breakPointArray?: number[];
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  progressBarValue,
  breakPointArray,
}) => {
  const [shouldSlowDown, setShouldSlowDown] = useState(false);
  const [isBreakPointProgressBar, setIsBreakPointProgressBar] = useState(false);

  if (!breakPointArray) {
    setIsBreakPointProgressBar(false);
  }

  useEffect(() => {
    if (!breakPointArray?.includes(progressBarValue)) {
      setShouldSlowDown(false);
      return;
    }

    const index = breakPointArray.indexOf(progressBarValue);

    if (
      progressBarValue > breakPointArray[index] - 2 &&
      progressBarValue < breakPointArray[index] + 2 &&
      index >= 0
    ) {
      setShouldSlowDown(true);
      return;
    }

    setShouldSlowDown(false);
  }, [progressBarValue, breakPointArray]);

  return (
    <>
      <div className={styles.toggle}>
        <button
          className={!isBreakPointProgressBar ? styles.active : ""}
          onClick={() => setIsBreakPointProgressBar(false)}
        >
          Progress Bar
        </button>
        <button
          className={isBreakPointProgressBar ? styles.active : ""}
          onClick={() => setIsBreakPointProgressBar(true)}
        >
          Break Point Progress Bar
        </button>
      </div>
      {isBreakPointProgressBar ? (
        <div
          data-testid="progressBar"
          className={styles.progressBar}
          style={{
            width: `${progressBarValue}%`,
            opacity: `${progressBarValue === 100 ? "0" : "1"}`,
            transition: `width ${
              shouldSlowDown ? "300ms" : "150ms"
            } ease-in, opacity 400ms ease`,
          }}
        />
      ) : (
        <div
          data-testid="progressBar"
          className={styles.progressBar}
          style={{
            width: `${progressBarValue}%`,
            opacity: `${progressBarValue === 100 ? "0" : "1"}`,
            transition: `width 150ms ease-in, opacity 400ms ease`,
          }}
        />
      )}
    </>
  );
};

export default ProgressBar;
