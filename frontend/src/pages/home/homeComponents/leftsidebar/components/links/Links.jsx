import React, { useState } from "react";
import styles from "./links.module.css";
import { Link } from "react-router-dom";

import {
  UilApps,
  UilFileAlt,
  UilUser,
  UilEnvelope,
} from "@iconscout/react-unicons";
import { useDispatch } from "react-redux";
import { modalOpen as contactModalOpen } from "../../../../../../Redux/ModalSlice.js";
import { modalOpen as aboutModalOpen } from "../../../../../../Redux/AboutModalSlice.js";
import RoutesConstants from "../../../../../../constants/RouteConstants.js";
const Links = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.links}>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>
          <Link
            to={RoutesConstants.HOME_PATH}
            style={{ textDecoration: "none", color: "white" }}
          >
            <UilApps size="24" style={{ marginRight: "8px" }} />
            Projects
          </Link>
        </li>
        <li>
          <Link
            to={RoutesConstants.BLOG_PATH}
            style={{ textDecoration: "none", color: "white" }}
          >
            <UilFileAlt size="24" style={{ marginRight: "8px" }} />
            Blog
          </Link>
        </li>
        <li onClick={() => dispatch(aboutModalOpen())}>
          <Link to="#" style={{ textDecoration: "none", color: "white" }}>
            <UilUser size="24" style={{ marginRight: "8px" }} />
            About
          </Link>
        </li>
        <li onClick={() => dispatch(contactModalOpen())}>
          <Link to="#" style={{ textDecoration: "none", color: "white" }}>
            <UilEnvelope size="24" style={{ marginRight: "8px" }} />
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Links;
