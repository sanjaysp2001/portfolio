import styles from "./About.module.css";
import assets from "../../data/assets.json"
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
            <img src={assets.about.cursorIcon} alt="curson"></img>
            <div>
              <h3>Frontend Developer</h3>
              <p>
                making it look like readable English. Many desktop publishing
                packages and web page editors now use Lorem Ipsum as their
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={assets.about.serverIcon} alt="server"></img>
            <div>
              <h3>Frontend Developer</h3>
              <p>
                making it look like readable English. Many desktop publishing
                packages and web page editors now use Lorem Ipsum as their
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={assets.about.uiIcon} alt="ui"></img>
            <div>
              <h3>Frontend Developer</h3>
              <p>
                making it look like readable English. Many desktop publishing
                packages and web page editors now use Lorem Ipsum as their
                default model text, and a search for 'lorem ipsum' will uncover
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
