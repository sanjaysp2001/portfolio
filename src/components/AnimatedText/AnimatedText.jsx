import styles from "./AnimatedText.module.css";
const AnimatedText = ({ children }) => {
  return <span className={styles.animated}>{ children }</span>;
};

export default AnimatedText;
