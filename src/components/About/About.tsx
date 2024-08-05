import styles from "./About.module.css";
import assets from "../../data/assets.json";
import { motion } from "framer-motion";
import { useState } from "react";

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
            <h3>Full Stack Developer</h3>
            <p>
              A passionate and dedicated full-stack developer specializing in
              the MERN (MongoDB, Express.js, React, Node.js) stack. With a
              strong foundation in both front-end and back-end technologies, I
              create robust, scalable, and user-friendly web applications. My
              expertise lies in designing responsive user interfaces, developing
              efficient server-side logic, and managing databases seamlessly.
              Explore my portfolio to see how I bring ideas to life through
              clean code and innovative solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
