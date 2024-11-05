import React from "react";
import styles from "./RecentBlogs.module.css";
import BlogCard from "./blogcard/BlogCard";
const RecentBlogs = () => {
  return (
    <div className={styles.recentBlogs}>
      <h3>Todays Blogs</h3>
      <BlogCard />
      <div className="line"></div>
      <BlogCard />
      <button>See more</button>
    </div>
  );
};

export default RecentBlogs;
