import React from "react";
import styles from "./LeftBar.module.css";
const SmallCard = ({ b }) => {
  return (
    <div className={styles.smallCard}>
      <img src={b.imgurl} alt="main blog image" />
      <div>
        <h2>{b.title}</h2>

        <p>{b.content}</p>
      </div>
    </div>
  );
};

export default SmallCard;
