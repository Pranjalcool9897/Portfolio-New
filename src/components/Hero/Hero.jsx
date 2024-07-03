import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Pranjal</h1>
        <p className={styles.description}>
        I am an aspiring full-stack developer with a passion for creating seamless, efficient, and dynamic web applications. With a solid foundation in both front-end and back-end technologies, I am dedicated to continuous learning and growth in the ever-evolving field of web development.
        </p>
        <button className={styles.button}>
        <a href="mailto:pranjalkulshresth9897@email.com" className={styles.buttext}>
          Contact Me
        </a>
        </button>
       
      </div>
      <img
        src={getImageUrl("hero/heroImage2.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
