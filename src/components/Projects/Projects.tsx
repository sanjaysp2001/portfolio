import React from "react";

import styles from "./Projects.module.css";

import projectDetails from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export type ProjectType = {
  title: string;
  description: string;
  skills: string[];
  imageSrc: string;
  demo: string;
  source: string;
};

let projects: ProjectType[] = projectDetails;

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
