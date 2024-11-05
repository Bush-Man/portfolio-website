import React from "react";
import styles from "./RightBar.module.css";
import RightBlogCard from "./RightBlogCard";
import blogs from "../../../../../data/blogs.js";
const RightBar = () => {
  return (
    <div className={styles.rightBar}>
      {blogs
        .filter((blog) => blog?.tag.toLowerCase().match("small"))
        .map((b, index) => (
          <RightBlogCard b={b} key={index} />
        ))}
    </div>
  );
};

export default RightBar;
