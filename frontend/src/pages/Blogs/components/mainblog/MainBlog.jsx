import React from "react";
import styles from "./MainBlog.module.css";
const MainBlog = ({ mainBlog }) => {
  return (
    <div className={styles.mainBlog}>
      <img src={mainBlog.imgurl} alt="main blog image" />
      <div>
        <h2>{mainBlog.title}</h2>

        <p>{mainBlog.content}</p>
      </div>
    </div>
  );
};

export default MainBlog;
