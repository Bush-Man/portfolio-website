import React from "react";
import styles from "./rightsidebar.module.css";
import SocialLinks from "./components/sociallinks/SocialLinks";
import RecentBlogs from "./components/recentblogs/RecentBlogs";
const rightsidebar = () => {
  return (
    <div className={styles.rightSideBar}>
      <SocialLinks />
      <RecentBlogs />
    </div>
  );
};

export default rightsidebar;
