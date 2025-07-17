// Styles
import styles from "./styles.module.scss";

// Icons
import Play from "../../assets/icons/Play";
import Pause from "../../assets/icons/Pause";

// Type
import type { Stage } from "../../types";

// Util
import { playSound } from "../../utils/playSound";

// Sounds
import bellStart from "../../assets/sounds/bell-start.mp3";
import bellFinish from "../../assets/sounds/bell-finish.mp3";

interface BtnProps {
  stage: Stage;
  isPlayed: boolean;
  setIsPlayed: React.Dispatch<React.SetStateAction<boolean>>;
  colors: Record<Stage, string>;
}

const Button = ({ stage, isPlayed, setIsPlayed, colors }: BtnProps) => {
  const handleClick = () => {
    setIsPlayed((prev) => !prev);

    if (isPlayed) {
      playSound(bellFinish);
    } else {
      playSound(bellStart);
    }
  };

  return (
    <button onClick={handleClick} className={`${styles.btn} ${styles[stage]}`}>
      {isPlayed ? (
        <Pause color={colors[stage]} />
      ) : (
        <Play color={colors[stage]} />
      )}
    </button>
  );
};

export default Button;
