import styles from "./About.module.css";
import assets from "../../data/assets.json";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.aboutItems}>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <motion.img
              initial={{ scale: 0.1 }}
              whileInView={{ scale: 1.5 }}
              viewport={{ once: true }}
              className={styles.aboutImage}
              src={assets.about.aboutImage1}
              alt="me sitting with laptop"
            ></motion.img>
          </div>

          <div className={styles.aboutItem}>
            <h3>Frontend Developer</h3>
            <p>
              I am a passionate React developer with 2 years of professional
              experience in creating dynamic and user-friendly web applications.
              My journey into web development began with a deep interest in
              front-end technologies, and over the past two years, I have honed
              my skills in building efficient and scalable applications using
              React.
            </p>
          </div>
        </div>
        <div
          className={styles.content}
          style={{ flexDirection: "row-reverse", marginBottom:"5%" }}
        >
          <div  className={styles.imageContainer}>
            <motion.img
              initial={{ scale: 0.1 }}
              whileInView={{ scale: 1.5 }}
              viewport={{ once: true }}
              className={styles.aboutImage}
              src={assets.about.aboutImage2}
              alt="me sitting with laptop"
            ></motion.img>
          </div>
          <div className={styles.aboutItem}>
            <h3>Problem Solver</h3>
            <p>
              I thrive in collaborative environments and enjoy working with
              cross-functional teams to bring ideas to life. My problem-solving
              skills, attention to detail, and dedication to continuous learning
              enable me to stay up-to-date with the latest industry trends and
              technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
