import React from "react";
import styles from "./CertificationCard.module.css";
import { logEvent } from "firebase/analytics";
import { analytics } from "../../App";

export const CertificationCard = ({
  project: { title, imageSrc, provider, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img src={imageSrc} alt={`f ${title}`} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <h3 className={styles.provider}>Provider : {provider}</h3>
      <div className={styles.links}>
        <a
          href={source}
          className={styles.link}
          onClick={() => {
            logEvent(analytics, "button_click", {
              button_name: "view_certificate",
            });
          }}
        >
          View Certificate
        </a>
      </div>
    </div>
  );
};
