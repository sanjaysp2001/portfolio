import styles from "./Hero.module.css";
import assets from "../../data/assets.json";
import AnimatedText from "../AnimatedComponents/AnimatedText";
import { logEvent } from "firebase/analytics";
import { motion } from "framer-motion";
import { analytics } from "../../App";
const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <AnimatedText text={"Hi, I am Sanjay"} />
        <div className={styles.textContainer}>
          <motion.p
            className={styles.description}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            I am a React Developer with 2 years of experience in{" "}
            <b>Javascript</b>, <b>React js</b>,<b>Redux</b> and{" "}
            <b>Material UI</b>
          </motion.p>
        </div>
        <div className={styles.links}>
          <motion.a
            onClick={() => {
              logEvent(analytics, "button_click", {
                button_name: "contact",
              });
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2 }}
            href="mailto:spsanjay6567@gmail.com"
            className={styles.contactButton}
          >
            Contact Me
          </motion.a>
          <motion.a
            onClick={() => {
              logEvent(analytics, "button_click", {
                button_name: "view_resume",
              });
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2 }}
            href="https://drive.google.com/file/d/1zZRAaP04n27crGQEI27jG3H0h5rWKXG0/view?usp=sharing"
            className={styles.contactButton}
          >
            View Resume
          </motion.a>
        </div>
      </div>
      <img
        src={assets.hero.heroImage}
        alt="hero"
        className={styles.heroImage}
      ></img>
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
