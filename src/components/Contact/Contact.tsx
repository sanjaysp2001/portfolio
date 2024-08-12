import styles from "./Contact.module.css";
import assets from "../../data/assets.json";
import { logEvent } from "firebase/analytics";
import { analytics } from "../../App";
import { useEffect } from "react";
const Contact = () => {
  useEffect(() => {
    logEvent(analytics, "screen_view");
  });
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={assets.contact.emailIcon} alt="Email icon" />
            <a
              onClick={() => {
                logEvent(analytics, "button_click", {
                  button_name: "contact_email",
                });
              }}
              href="mailto:sanjayspm2001@email.com"
            >
              sanjayspm2001@gmail.com
            </a>
          </li>
          <li className={styles.link}>
            <img src={assets.contact.linkedinIcon} alt="LinkedIn icon" />
            <a
              onClick={() => {
                logEvent(analytics, "button_click", {
                  button_name: "contact_linkedin",
                });
              }}
              href="https://www.linkedin.com/in/sanjaysp2001"
            >
              linkedin.com/sanjaysp2001
            </a>
          </li>
          <li className={styles.link}>
            <img src={assets.contact.githubIcon} alt="Github icon" />
            <a
              onClick={() => {
                logEvent(analytics, "button_click", {
                  button_name: "contact_github",
                });
              }}
              href="https://www.github.com/sanjaysp2001"
            >
              github.com/sanjaysp2001
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Contact;
