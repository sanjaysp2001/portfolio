import skills from "../../data/skills.json";
import experience from "../../data/experience.json";
import styles from "./Experience.module.css";
const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImgContainer}>
                  <img src={skill.imageUrl} alt={skill.name} />
                </div>
                <p>{skill.name}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.experience}>
          {experience.map((exp, id) => {
            return (
              <li key={id} className={styles.expItem}>
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
                      return <li key={id}>{des}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
