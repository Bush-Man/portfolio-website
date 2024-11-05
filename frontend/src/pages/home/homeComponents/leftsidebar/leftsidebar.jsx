import React from "react";
import styles from "./leftsidebar.module.css";
import Profile from "./components/profile/profile.jsx";
import NavLinks from "./components/links/Links.jsx";
import Activites from "./components/Activities/Activites.jsx";
const leftsidebar = () => {
  return (
    <div className={styles.leftSideBar}>
      <Profile />
      <div className={styles.container}>
      <NavLinks />
      <div className="line"></div>
      <Activites/>
      </div>
    </div>
  );
};

export default leftsidebar;
