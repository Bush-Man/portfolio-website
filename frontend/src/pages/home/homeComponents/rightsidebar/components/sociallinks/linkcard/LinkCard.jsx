import React from "react";
import styles from "./LinkCard.module.css";
const LinkCard = ({ name, linkImage }) => {
  return (
    <div className={styles.linkCard}>
      <div className={styles.right}>
        <img src={linkImage} alt={name} />
        <div className={styles.names}>
          <h3>{name}</h3>
          <h5>{`@${name}`}</h5>
        </div>
      </div>
      <button className={styles.linkBtn}>open</button>
    </div>
  );
};

export default LinkCard;
