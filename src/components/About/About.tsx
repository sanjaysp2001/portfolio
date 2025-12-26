import styles from "./About.module.css";
import assets from "../../data/assets.json";
import { motion } from "framer-motion";
import { useState } from "react";
import about from "../../data/about.json";
const About = () => {
  const [currentImage, setCurrentImage] = useState(assets.about.aboutImage1);
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
              src={currentImage}
              alt="me sitting with laptop"
              onMouseOver={() => {
                setCurrentImage(assets.about.aboutImage2);
              }}
              onMouseOut={() => {
                setCurrentImage(assets.about.aboutImage1);
              }}
            ></motion.img>
          </div>

          <div className={styles.aboutItem}>
            <h1>Full Stack Developer</h1>
            <div>
              {about.description.map((d) => {
                return <p className={styles.aboutDescription}>{d}</p>;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
