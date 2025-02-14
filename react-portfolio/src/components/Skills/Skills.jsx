import React from "react";
import skills from "../../data/skills.json";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <section id="skills" className={styles.skillsSection}>
  <h2 className={styles.heading}>MY SKILLS</h2>
  <div className={styles.skillsGrid}>
    {skills.map((skill, index) => (
      <div key={index} className={styles.skillItem}>
        <div className={styles.skillIcon}>
          <img
            src={skill.imageSrc}
            alt={`${skill.title} logo`}
            className={styles.skillImage}
          />
        </div>
        <p className={styles.skillTitle}>{skill.title}</p>
      </div>
    ))}
  </div>
</section>

  );
};

export default Skills;
