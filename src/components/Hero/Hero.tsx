import styles from "./Hero.module.css";
import assets from "../../data/assets.json";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Sanjay!</h1>
        <p className={styles.description}>
          I am a React Developer experienced in Javascript, React, Redux and
          Material UI
        </p>
        <div className={styles.links}>
          <a
            href="mailto:spsanjay6567@gmail.com"
            className={styles.contactButton}
          >
            Contact Me
          </a>
          <a
            href="https://drive.google.com/file/d/1zZRAaP04n27crGQEI27jG3H0h5rWKXG0/view?usp=sharing"
            className={styles.contactButton}
          >
            View Resume
          </a>
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
