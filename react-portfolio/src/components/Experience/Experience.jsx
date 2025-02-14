import React, { useState, useEffect } from "react";
import history from "../../data/history.json";
import styles from "./Experience.module.css";

export const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 1.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 1500);

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % history.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? history.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="experience" className={styles["experience-section"]}>
      <h2>EXPERIENCE</h2>
      <div className={styles["experience-container"]}>
        {/* Left Button }
        <button className={styles["slider-btn left"]} onClick={handlePrev}>
          &#8249;
        </button> */}
  
        {/* Experience Card */}
        <div className={styles["experience-card"]}>
        <img
            src={history[currentIndex].imageSrc}
            alt={`${history[currentIndex].role} logo`}
            className={styles["experience-image"]}
          />
          <h3>{history[currentIndex].role}</h3>
          <h4>{history[currentIndex].organisation}</h4>
          <p className={styles["experience-duration"]}>{history[currentIndex].startDate}</p>
          <p className={styles["experience-duration"]}>{history[currentIndex].endDate}</p>
          <p className={styles["experience-description"]}>{history[currentIndex].experiences}</p>
        </div>

        {/* Right Button }
        <button className={styles["slider-btn right"]} onClick={handleNext}>
          &#8250;
        </button>*/}
      </div>
    </section>
  );
};

export default Experience;
