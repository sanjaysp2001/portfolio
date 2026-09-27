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
        <motion.div
          className={styles.typeanimation}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <TypeAnimation
            sequence={["Hi, I am Sanjay"]}
            wrapper="span"
            speed={25}
          />
        </motion.div>
        <div className={styles.textContainer}>
          <motion.p
            className={styles.description}
            initial={{ opacity: 0, x: -24, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 1,
            }}
          >
            <span>
              I am a .NET Full Stack Developer with 4 years of professional
              experience specializing in
            </span>
            <AnimatedText> C# </AnimatedText>,
            <AnimatedText>JavaScript </AnimatedText>,
            <AnimatedText>TypeScript</AnimatedText>,
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
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: 1.7,
            }}
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
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: 1.7,
            }}
            href={resume.url}
            className={styles.contactButton}
          >
            View Resume
          </motion.a>
        </div>
      </div>
      <motion.img
        src={assets.hero.heroImage}
        alt="hero"
        className={styles.heroImage}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
