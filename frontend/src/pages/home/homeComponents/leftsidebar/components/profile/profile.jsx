import React from 'react'
import styles from "./profile.module.css";
import profilePic from "../../../../../../assets/profile.png";
import verified from "../../../../../../assets/verified.svg";
import whatsapp from "../../../../../../assets/whatsapp.svg";
import gmail from "../../../../../../assets/gmail.png";

const profile = () => {
  return (
    <div className={styles.profile}>
       <img src={profilePic} alt="profile picture" className={styles.profilePic} />
       <div className={styles.name}>
       <h3>Dennis Wachira</h3>
        <div className={styles.badge}>
            <img src={verified} alt="" />
        </div>
       </div>
       <div className={styles.bio}>
           <p>Mobile/Website Developer</p>
           <p>Java/Javascript/Dart</p>
           <p>(Flutter,React/Next, Springboot, Node.js)</p>
       </div>
       <div className={styles.ctaButtons}>
        <div>
            <img src={whatsapp} alt="" className={styles.ctaIcons} style={{width:"20px",height:"20px"}}/>
            <h3>send text</h3>
        </div>
        <div>
            <img src={gmail} alt="" className={styles.ctaIcons} style={{width:"28px",height:"28px"}}/>
            <h3>send email</h3>
        </div>

       </div>
    </div>
  )
}

export default profile