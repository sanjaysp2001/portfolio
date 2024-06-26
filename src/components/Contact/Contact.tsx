import styles from "./Contact.module.css";
import assets from "../../data/assets.json";
const Contact = () => {
  return (
    <footer id="contact" className={styles.footer}>     
      <div  className={styles.container}>
        <div className={styles.text}>
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={assets.contact.emailIcon} alt="Email icon" />
            <a href="mailto:myemail@email.com">spsanjay6567@gmail.com</a>
          </li>
          <li className={styles.link}>
            <img src={assets.contact.linkedinIcon} alt="LinkedIn icon" />
            <a href="https://www.linkedin.com/in/sanjaysp2001">
              linkedin.com/sanjaysp2001
            </a>
          </li>
          <li className={styles.link}>
            <img src={assets.contact.githubIcon} alt="Github icon" />
            <a href="https://www.github.com/sanjaysp2001">
              github.com/sanjaysp2001
            </a>
          </li>
        </ul>
      </div>    
    </footer>
  );
};

export default Contact;
