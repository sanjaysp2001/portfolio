import React from "react";
import styles from "./Certifications.module.css";
import certifications from "../../data/certifications.json";
import { CertificationCard } from "./CertificationCard";

export const Certifications = () => {
  const duplicatedCertifications = [...certifications, ...certifications];

  return (
    <section className={styles.container} id="certifications">
      <h2 className={styles.title}>Certifications</h2>

      <div className={styles.marquee}>
        <div className={styles.track}>
          {duplicatedCertifications.map((certification, index) => (
            <CertificationCard
              key={`${certification.title}-${index}`}
              project={certification}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
