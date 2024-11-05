import React from "react";
import styles from "./navbar.module.css";
import Lottie from "lottie-react";
import briefcase from "../../assets/briefcase.svg";
import whatsup from "../../assets/whatsapp.json";
import call from "../../assets/call.svg";
import gmail from "../../assets/gmail.png";
import { Link } from "react-router-dom";
import RoutesConstants from "../../constants/RouteConstants";
import { UilUser } from "@iconscout/react-unicons";
const navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link className={styles.left} to={RoutesConstants.HOME_PATH}>
        <img
          src={briefcase}
          alt="portfolio icon"
          srcset=""
          style={{ width: 20, height: 20 }}
        />
        <h3>My Portfolio</h3>
      </Link>
      <div className={styles.center}>
        <div className={styles.status}>
          <div className={styles.statusIcon}></div>
          <div className={styles.statusText}>Open To Work</div>
        </div>
        <div className={styles.ctaIcons}>
          <Lottie animationData={whatsup} style={{ height: 25, width: 25 }} />
          <img
            src={call}
            alt="direct call icon"
            style={{ width: 20, height: 20 }}
          />
          <img src={gmail} alt="gmail icon" style={{ width: 30, height: 30 }} />
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.viewCv}>
          <h3>view my cv</h3>
        </div>
        <div className={styles.profile}>
          <Link to={RoutesConstants.LOGIN_PATH}>
            <UilUser size="24" style={{ marginRight: "8px" }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default navbar;
