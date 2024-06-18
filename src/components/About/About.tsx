import styles from "./About.module.css";
import assets from "../../data/assets.json";
const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={assets.about.aboutImage}
          alt="me sitting with laptop"
        ></img>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={assets.about.uiIcon} alt="ui"></img>
            <div>
              <h3>Frontend Developer</h3>
              <p>
                I am a passionate React developer with 2 years of professional
                experience in creating dynamic and user-friendly web
                applications. My journey into web development began with a deep
                interest in front-end technologies, and over the past two years,
                I have honed my skills in building efficient and scalable
                applications using React.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={assets.about.cursorIcon} alt="curson"></img>
            <div>
              <h3>Problem Solver</h3>
              <p>
                I thrive in collaborative environments and enjoy working with
                cross-functional teams to bring ideas to life. My
                problem-solving skills, attention to detail, and dedication to
                continuous learning enable me to stay up-to-date with the latest
                industry trends and technologies.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
