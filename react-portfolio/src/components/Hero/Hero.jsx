import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import Typewriter from "./Typewriter.jsx";


export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}> 
            <Typewriter
            words={["Hi, I'm Mihir Bhatt"]}
            typingSpeed={150}
            deletingSpeed={100}
            />
            </h1>
           
            <p className={styles.description}>
            I focus on transforming intricate problems into 
            intuitive, user-friendly experiences using technologies 
            like MERN and C++. With a strong command of 
            JavaScript, I build scalable, high-performance applications 
            that push the boundaries of innovation. 
            Let's connect and explore how we can collaborate on impactful 
            digital solutions.
            </p>
            <a href="hero/Mihir_Resume.pdf" className={styles.contactBtn}>
          My Resume <img src="hero/downl.png"
        alt="Hero image of me"
        className={styles.dwnImg}
        />
        </a>
        </div>
        <img src="hero/her02.png"
        alt="Hero image of me"
        className={styles.heroImg}
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  );
};