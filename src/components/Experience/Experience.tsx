import skills from "../../data/skills.json";
import experience from "../../data/experience.json";
import styles from "./Experience.module.css";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
      <h2 className={styles.title}>Experience & Skills</h2>
      <div className={styles.content}>
        <motion.div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <motion.div
                key={id}
                className={styles.skill}
                initial={{ opacity: 0, scale: 0.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className={styles.skillImgContainer}>
                  <img src={skill.imageUrl} alt={skill.name} />
                </div>
                <p>{skill.name}</p>
              </motion.div>
            );
          })}
        </motion.div>
        <ul className={styles.experience}>
          {experience.map((exp, id) => {
            return (
              <motion.li
                key={id}
                className={styles.expItem}
                initial={{ x: 200, opacity: 0.5 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className={styles.expItemDetails}>
                  <div className={styles.expItemHeader}>
                    <img src={exp.imageSrc} alt={exp.organization} />
                    <div>
                      <h3>{`${exp.role},${exp.organization}`}</h3>
                      <p>
                        {exp.startDate} - {exp.endDate}
                      </p>
                    </div>
                  </div>

                  <ul>
                    {exp.description.map((des, id) => {
                      return (
                        <li key={id} className={styles.listItem}>
                          {des}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
