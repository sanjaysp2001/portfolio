import React, { Key } from "react";

import styles from "./ProjectCard.module.css";
import { ProjectType } from "./Projects";

interface IProjectCard {
  project: ProjectType;
  key: Key;
}
export const ProjectCard = ({ project, key }: IProjectCard) => {
  return (
    <div className={styles.container} key={key}>
      <img
        src={project.imageSrc}
        alt={`${project.title}`}
        className={styles.image}
      />
      <div className={styles.innerContainer}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.skillContainer}>
          <div className={styles.innerContainer}>
            <ul className={styles.skills}>
              {project.skills.map((skill, id) => {
                return (
                  <li key={id} className={styles.skill}>
                    {skill}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.links}>
            <a href={project.demo} className={styles.link}>
              Demo
            </a>
            <a href={project.source} className={styles.link}>
              Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
