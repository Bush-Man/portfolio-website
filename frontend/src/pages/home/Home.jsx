import React, { useEffect, useRef } from "react";
import styles from "./Home.module.css";
import Rightsidebar from "./homeComponents/rightsidebar/rightsidebar.jsx";
import Leftsidebar from "./homeComponents/leftsidebar/leftsidebar.jsx";
import Center from "./homeComponents/center/Center.jsx";
import { AboutPage } from "../../exports.js";
import ContactModal from "../../components/ContactModal/ContactModal.jsx";
import BottomNavigationBar from "../../components/BottomNavigationBar/BottomNavigationBar.jsx";
import AboutModal from "../../components/AboutModal/AboutModal.jsx";
const Home = () => {
  const centerRef = useRef(null);

  useEffect(() => {
    const centerDiv = centerRef.current;

    const syncScroll = () => {
      window.scrollTo(0, centerDiv.scrollTop);
    };

    if (centerDiv) {
      centerDiv.addEventListener("scroll", syncScroll);
    }

    return () => {
      if (centerDiv) {
        centerDiv.removeEventListener("scroll", syncScroll);
      }
    };
  }, []);

  return (
    <div className={styles.home}>
      <div className={styles.leftSideBar}>
        <Leftsidebar />
      </div>
      {/* 
      <div className={styles.aboutPageDisplay}>
        <AboutPage />
      </div> */}
      <div className={styles.center} ref={centerRef}>
        <Center />
        <ContactModal />
        <AboutModal />
      </div>
      <div className={styles.rightSideBar}>
        <Rightsidebar />
      </div>
    </div>
  );
};

export default Home;
