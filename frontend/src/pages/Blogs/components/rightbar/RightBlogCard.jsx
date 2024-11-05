import React from "react";
import styles from "./RightBar.module.css";
const RightBlogCard = ({ b }) => {
  return (
    <div className={styles.rightBlogCard}>
      <img src={b.imgurl} alt="main blog image" />
      <div>
        <h2
          style={{ color: "black", fontSize: "16px", textOverflow: "ellipsis" }}
        >
          {b.title}
        </h2>

        <p
          style={{
            color: "black",
            fontSize: "15px",
            lineHeight: "17px",
            overflow: " hidden",
            textOverflow: " ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "4",
            WebkitBoxOrient: "vertical",
            objectFit: "cover",
            width: "100%",
          }}
        >
          {b.content}
        </p>
      </div>
    </div>
  );
};

export default RightBlogCard;
