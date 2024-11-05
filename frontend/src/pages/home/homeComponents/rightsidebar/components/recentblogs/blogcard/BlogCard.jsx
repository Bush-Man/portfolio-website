import React from "react";
import styles from "./BlogCard.module.css";
const BlogCard = () => {
  return (
    <div className={styles.blogCard}>
      <img src="https://placehold.jp/150x150.png" alt="" />
      <div className={styles.blogInfo}>
        {/* tittle */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis cumque
          dolore non nulla, impedit.
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
