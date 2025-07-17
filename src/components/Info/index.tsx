// Styles
import styles from "./styles.module.scss";

// Type
import type { Stage } from "../../types";
import { secondsToTime } from "../../utils/secondsToTime";

interface InfoProps {
  stage: Stage;
  timeWorked: number;
}

const Info = ({ stage, timeWorked }: InfoProps) => {
  const timeFormatted = secondsToTime(timeWorked);

  return (
    <section className={`${styles.info} ${styles[stage]}`}>
      <h2>Tempo em foco:</h2>
      <p>{`${timeFormatted.hrs}:${timeFormatted.min}:${timeFormatted.sec}`}</p>
    </section>
  );
};

export default Info;
