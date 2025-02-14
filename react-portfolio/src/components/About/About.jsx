import React from 'react'

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>OVERVIEW</h2>
            <div className={styles.content}>
            <img
               src="about/codi.png"
               alt="Me sitting with a laptop"
               className={styles.aboutImage}
             />
             <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
              <a href="https://leetcode.com/u/Mihir_Bhatt161/" className={styles.leetBtn}>
              <img src="about/leet.png" alt="Cursor icon" className={styles.abtImg} /></a>
            <div className={styles.aboutItemText}>
              <h3>Coder</h3>
              <p>
              Solved 400+ Data Structures and Algorithms (DSA) problems on LeetCode, improving problem-solving skills
              and algorithmic efficiency.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
          <a href="https://www.coursera.org/account/accomplishments/certificate/YF2NWA82WZRV" className={styles.leetBtn}>
            <img src="about/coursera.png" alt="Server icon" className={styles.abtImg} /></a>
            <div className={styles.aboutItemText}>
              <h3>Certifications</h3>
              <p>
              Earned certifications in Software Development and Machine Learning, demonstrating proficiency in modern
              software technologies.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <a href="https://github.com/Mihirbhatt161/" className={styles.leetBtn}>
            <img src="about/github.png" alt="UI icon" className={styles.abtImg} /></a>
            <div className={styles.aboutItemText}>
              <h3>Passionate</h3>
              <p>
              Gained hands-on experience with cutting-edge software technologies, contributing to multiple projects in
              web development, AI, and automation.
              </p>
            </div>
          </li>
        </ul>
        </div>
    </section>
  )
};
