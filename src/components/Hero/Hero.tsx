import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Sanjay!</h1>
        <p className={styles.description}>
          I am a React Developer experienced in Javascript, React, Redux and
          Material UI
        </p>
        <a
          href="mailto:spsanjay6567@gmail.com"
          className={styles.contactButton}
        >
          Contact Me
        </a>
      </div>
      <img
        src="/assets/hero/heroImage.png"
        alt="hero"
        className={styles.heroImage}
      ></img>
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
