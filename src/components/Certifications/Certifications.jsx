import React, { useRef } from "react";
import styles from "./Certifications.module.css";
import certifications from "../../data/certifications.json";
import { CertificationCard } from "./CertificationCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export const Certifications = () => {
  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  return (
    <section className={styles.container} id="certifications">
      <h2 className={styles.title}>Certifications</h2>
      <div className={styles.scrollContainer}>
        <FontAwesomeIcon
          icon={faCircleArrowLeft}
          className={styles.scrollArrows}
          onClick={() => {
            scroll(-355);
          }}
        />
        <div className={styles.certifications} ref={ref}>
          {certifications.map((c, id) => {
            return <CertificationCard key={id} project={c} />;
          })}
        </div>
        <div className={styles.mobileArrowContainer}>
          <FontAwesomeIcon
            icon={faCircleArrowLeft}
            className={styles.scrollArrowsMobile}
            onClick={() => {
              scroll(-325);
            }}
          />
          <FontAwesomeIcon
            className={styles.scrollArrowsMobile}
            icon={faCircleArrowRight}
            onClick={() => {
              scroll(325);
            }}
          />
        </div>
        <FontAwesomeIcon
          className={styles.scrollArrows}
          icon={faCircleArrowRight}
          onClick={() => {
            scroll(355);
          }}
        />
      </div>
    </section>
  );
};
