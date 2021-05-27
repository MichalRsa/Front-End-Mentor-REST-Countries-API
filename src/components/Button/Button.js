import styles from "./button.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const Button = ({ action, text }) => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <button
      className={`${styles.button} ${darkTheme ? styles.darkTheme : null}`}
      onClick={action}
    >
      {text}
    </button>
  );
};

export default Button;
