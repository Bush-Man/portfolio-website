import React from "react";
import styles from "./about.module.css";
import ReactPlayer from "react-player";
import clip from "../../assets/aboutclip.webm";
const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.right}>
        <h2>About</h2>
        <p>
          I am a passionate and experienced software developer with over 5 years
          of experience in building robust and scalable web applications.
          Currently, I am a Full-Stack Developer at XYZ Corp, where I specialize
          in developing dynamic user interfaces and efficient back-end systems
          using JavaScript, React, and Node.js. I hold a Bachelor’s degree in
          Computer Science from ABC University and have earned several
          certifications, including AWS Certified Developer and Microsoft
          Certified: Azure Developer Associate. My recent projects include
          developing a real-time chat application and optimizing an e-commerce
          platform that resulted in a 30% increase in user engagement. My
          strengths lie in problem-solving, collaboration, and continuous
          learning. I am an avid contributor to open-source projects and enjoy
          participating in hackathons to challenge myself and stay up-to-date
          with the latest technologies. In my free time, I love exploring new
          programming languages, contributing to tech blogs, and playing chess.
          Feel free to connect with me on LinkedIn or reach out via email at
          developer@example.com for any collaboration or job opportunities.
        </p>
      </div>
    </div>
  );
};

export default About;
