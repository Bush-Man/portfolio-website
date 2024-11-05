import React from "react";
import styles from "./Post.module.css";
const Post = () => {
  let tags = ["java", "spring boot", "next", "css"];
  return (
    <div className={styles.post}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src="https://placehold.co/600x400" alt="" />
          <div className={styles.date}>
            <p>Aug</p>
            <h3>12</h3>
          </div>
        </div>
        <div className={styles.postInfo}>
          <div className={styles.time}>thu 07.00am</div>
          <h3 className={styles.title}>Bank ERP Software</h3>
          <div className={styles.tags}>
            {tags.map((tag, index) => (
              <div className={styles.tag} key={index}>
                {`# ${tag}`}
              </div>
            ))}
          </div>
        </div>
        <div className="line"></div>
        <div className={styles.buttons}>
          <button>github</button>
          <button>Open link</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
