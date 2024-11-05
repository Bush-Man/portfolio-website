import React from "react";
import styles from "./Activities.module.css";
import { Link } from "react-router-dom";
import whatsapp from "../../../../../../assets/whatsapp.svg";
import {
  UilApps,
  UilFileAlt,
  UilUser,
  UilEnvelope,
} from "@iconscout/react-unicons";
const Activites = () => {
  return (
    <div className={styles.activities}>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>
          <Link to="#" style={{ textDecoration: "none", color: "white" }}>
            <UilApps size="24" style={{ marginRight: "8px" }} />
            Projects
          </Link>
        </li>
        <li>
          <Link to="#" style={{ textDecoration: "none", color: "white" }}>
            <UilFileAlt size="24" style={{ marginRight: "8px" }} />
            Blog
          </Link>
        </li>
        <li>
          <Link to="#" style={{ textDecoration: "none", color: "white" }}>
            <UilUser size="24" style={{ marginRight: "8px" }} />
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Activites;
