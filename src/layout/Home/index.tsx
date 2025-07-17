import { useState } from "react";

// Styles
import styles from "./styles.module.scss";

// Components
import Button from "../../components/Button";
import Timer from "../../components/Timer";

// Type
import type { Stage } from "../../types";

// Icons
import brainIcon from "../../assets/icons/brain.svg";
import Coffee from "../../assets/icons/Coffee";

const Home = () => {
  const [isPlayed, setIsPlayed] = useState(false);
  const [stage, setStage] = useState<Stage>("focus");

  const titles = {
    focus: "Foco",
    shortBreak: "Tempo Curto",
    longBreak: "Tempo Longo",
  };

  const colors = {
    focus: "#471515",
    shortBreak: "#14401d",
    longBreak: "#153047",
  };

  return (
    <main className={`${styles.home} ${styles[stage]}`}>
      <h1>
        {stage === "focus" ? (
          <img src={brainIcon} alt="" aria-hidden="true" />
        ) : (
          <Coffee color={colors[stage]} />
        )}
        {titles[stage]}
      </h1>

      <Timer
        stage={stage}
        setStage={setStage}
        focusTime={5}
        shortBreakTime={2}
        longBreakTime={3}
        isPlayed={isPlayed}
        setIsPlayed={setIsPlayed}
      />

      <Button
        stage={stage}
        isPlayed={isPlayed}
        setIsPlayed={setIsPlayed}
        colors={colors}
      />
    </main>
  );
};

export default Home;
