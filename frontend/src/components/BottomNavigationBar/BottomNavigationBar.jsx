import React, { useState } from "react";
import styles from "./BottomNavigationBar.module.css";

import {
  UilApps,
  UilFileAlt,
  UilUser,
  UilEnvelope,
} from "@iconscout/react-unicons";
import RoutesConstants from "../../constants/RouteConstants";
import { Link } from "react-router-dom";

const BottomNavigationBar = () => {
  const [selected, setSelected] = useState({ boolean: false, item: {} });

  const handleClick = (item) => {
    setSelected({
      boolean: true,
      item: item,
    });
  };

  const navItems = [
    {
      className: styles.li,
      onClick: handleClick,
      to: RoutesConstants.HOME_PATH,
      style: {
        textDecoration: "none",
        color: "white",
      },
      icon: <UilApps size="24" style={{ marginRight: "8px" }} />,
      name: "project",
    },
    {
      className: styles.li,
      onClick: handleClick,
      to: RoutesConstants.BLOG_PATH,
      style: {
        textDecoration: "none",
        color: "white",
      },
      icon: <UilFileAlt size="24" style={{ marginRight: "8px" }} />,
      name: "blog",
    },
    {
      className: styles.li,
      onClick: handleClick,
      to: RoutesConstants.ABOUT_PATH,
      style: {
        textDecoration: "none",
        color: "white",
      },
      icon: <UilUser size="24" style={{ marginRight: "8px" }} />,
      name: "profile",
    },
    {
      className: styles.li,
      onClick: handleClick,
      to: RoutesConstants.CONTACT_PATH,
      style: {
        textDecoration: "none",
        color: "white",
      },
      icon: <UilEnvelope size="24" style={{ marginRight: "8px" }} />,
      name: "contacts",
    },
  ];

  return (
    <div className={styles.bottomNavigationBar}>
      <ul style={{ listStyleType: "none", padding: 0 }} className={styles.ul}>
        {navItems.map((item, index) => (
          <li
            className={item.className}
            onClick={() => item.onClick(item)} 
            key={index}
          >
            <Link
              to={item.to}
              style={{
                textDecoration: item.style.textDecoration,
                color: item.style.color,
              }}
            >
              {item.icon}
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BottomNavigationBar;
