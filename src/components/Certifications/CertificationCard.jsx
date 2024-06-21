import React from "react";

import styles from "./CertificationCard.module.css";

export const CertificationCard = ({
  project: { title, imageSrc, provider, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img src={imageSrc} alt={`f ${title}`} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <h3 className={styles.provider}>Provider : {provider}</h3>
      <div className={styles.links}>
        <a href={source} className={styles.link}>
          View Certificate
        </a>
      </div>
    </div>
  );
};
