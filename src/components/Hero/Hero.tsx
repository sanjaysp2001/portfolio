import styles from "./Hero.module.css";
import assets from "../../data/assets.json";
import resume from "../../data/resume.json";
import { TypeAnimation } from "react-type-animation";
import { logEvent } from "firebase/analytics";
import { motion } from "framer-motion";
import { analytics } from "../../App";
import AnimatedText from "../AnimatedText/AnimatedText";
const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.typeanimation}>
          <TypeAnimation
            sequence={["Hi, I am Sanjay"]}
            wrapper="span"
            speed={20}
          />
        </div>
        <div className={styles.textContainer}>
          <motion.p
            className={styles.description}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.7, duration: 0.8 }}
          >
            <span>
              I am a proficient Full Stack Developer with 2+ years of experience
              specializing in
            </span>
            <AnimatedText> C# </AnimatedText>,
            <AnimatedText>JavaScript </AnimatedText>,
            <AnimatedText> .NET Core </AnimatedText>
            and
            <AnimatedText> React </AnimatedText>
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
            transition={{ delay: 1.7 }}
            href="mailto:sanjayspm2001@gmail.com"
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
            transition={{ delay: 1.7 }}
            href={resume.url}
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
