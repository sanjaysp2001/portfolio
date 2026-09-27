import skills from "../../data/skills.json";
import experience from "../../data/experience.json";
import styles from "./Experience.module.css";
import { motion } from "framer-motion";

const renderExperienceVisual = (organization: string) => {
  if (organization === "ValGenesis") {
    return (
      <div className={styles.visualPanel}>
        <div className={styles.metricRow}>
          <div className={styles.metricCard}>
            <span>CI/CD uptime</span>
            <strong>99.9%</strong>
          </div>
          <div className={styles.metricCard}>
            <span>Shared libs</span>
            <strong>4+</strong>
          </div>
        </div>

        <div className={styles.badgeRow}>
          {["React", "TypeScript", "ASP.NET Core", "Kafka", "Docker"].map(
            (badge) => (
              <span key={badge} className={styles.badge}>
                {badge}
              </span>
            ),
          )}
        </div>

        <div className={styles.flowDiagram}>
          <span className={styles.flowNode}>Micro Frontends</span>
          <span className={styles.flowConnector} />
          <span className={styles.flowNode}>ASP.NET Core</span>
          <span className={styles.flowConnector} />
          <span className={styles.flowNode}>Kafka</span>
          <span className={styles.flowConnector} />
          <span className={styles.flowNode}>PostgreSQL</span>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.visualPanel}>
      <div className={styles.metricRow}>
        <div className={styles.metricCard}>
          <span>Config flows</span>
          <strong>3D</strong>
        </div>
        <div className={styles.metricCard}>
          <span>Pricing engine</span>
          <strong>Live</strong>
        </div>
      </div>

      <div className={styles.isometricScene}>
        <div className={styles.scenePlatform} />
        <div className={styles.carBody}>
          <div className={styles.carWindow} />
        </div>
        <div className={styles.wheel} />
        <div className={styles.wheel} />
        <div className={styles.configLabel}>Chassis</div>
        <div className={styles.configLabel}>Colors</div>
        <div className={styles.configLabel}>Wheels</div>
        <div className={styles.configLabel}>Pricing</div>
      </div>
    </div>
  );
};

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
                whileHover={{ scale: 1.2, transition: { duration: 0.1 } }}
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
                <div className={styles.expRow}>
                  <div className={styles.expItemDetails}>
                    <div className={styles.expItemHeader}>
                      <img src={exp.imageSrc} alt={exp.organization} />
                      <div>
                        <h3>{`${exp.role}, ${exp.organization}`}</h3>
                        <p>
                          {exp.startDate} - {exp.endDate}
                        </p>
                      </div>
                    </div>

                    <ul>
                      {exp.description.map((des, idx) => {
                        return (
                          <li key={idx} className={styles.listItem}>
                            {des}
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div className={styles.expVisual}>
                    {renderExperienceVisual(exp.organization)}
                  </div>
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
