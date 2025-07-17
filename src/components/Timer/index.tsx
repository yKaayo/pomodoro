import { useRef, useState } from "react";

// Styles
import styles from "./styles.module.scss";

// Hook
import { useInterval } from "../../hooks/useInterval";

// Util
import { secondsToTime } from "../../utils/secondsToTime";

// Type
import type { Stage } from "../../types";

interface TimerProps {
  stage: Stage;
  setStage: React.Dispatch<React.SetStateAction<Stage>>;
  focusTime: number;
  shortBreakTime: number;
  longBreakTime: number;
  isPlayed: boolean;
}

const Timer = ({
  stage,
  setStage,
  focusTime,
  shortBreakTime,
  longBreakTime,
  isPlayed,
}: TimerProps) => {
  const [time, setTime] = useState(focusTime);
  const countRounds = useRef(0);

  useInterval(
    () => {
      if (time === 0) {
        countRounds.current++;

        if (countRounds.current === 5) {
          setStage("longBreak");
          setTime(longBreakTime);
          countRounds.current = -1;
        } else if (countRounds.current % 2 === 0) {
          setStage("focus");
          setTime(focusTime);
        } else {
          setStage("shortBreak");
          setTime(shortBreakTime);
        }
      } else {
        setTime((prev) => prev - 1);
      }
    },

    isPlayed ? 1000 : null
  );

  return (
    <div className={`${styles.timer} ${styles[stage]}`}>
      <p style={isPlayed ? { fontWeight: 800 } : { fontWeight: 400 }}>
        {secondsToTime(time).min}
      </p>
      <p style={isPlayed ? { fontWeight: 800 } : { fontWeight: 400 }}>
        {secondsToTime(time).sec}
      </p>
    </div>
  );
};

export default Timer;
