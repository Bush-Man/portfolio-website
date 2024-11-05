import React from "react";
import styles from "./LeftBar.module.css";
const BigCard = ({ b }) => {
  return (
    <div className={styles.bigCard}>
      <img src={b.imgurl} alt="main blog image" />
      <div>
        <h2>{b.title}</h2>

        <p>{b.content}</p>
      </div>
    </div>
  );
};

export default BigCard;
