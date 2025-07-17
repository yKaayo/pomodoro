// Styles
import styles from "./styles.module.scss";

// Icons
import Play from "../../assets/icons/Play";
import Pause from "../../assets/icons/Pause";

// Type
import type { Stage } from "../../types";

interface BtnProps {
  stage: Stage;
  isPlayed: boolean;
  setIsPlayed: React.Dispatch<React.SetStateAction<boolean>>;
  colors: Record<Stage, string>;
}

const Button = ({ stage, isPlayed, setIsPlayed, colors }: BtnProps) => {
  const handleClick = () => {
    setIsPlayed((prev) => !prev);
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
