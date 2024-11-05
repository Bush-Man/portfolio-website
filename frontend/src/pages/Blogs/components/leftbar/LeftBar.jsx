import React from "react";
import styles from "./LeftBar.module.css";
import SmallCard from "./SmallCard";
import BigCard from "./BigCard";
import blogs from "../../../../../data/blogs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RoutesConstants from "../../../../constants/RouteConstants";
const LeftBar = () => {
  const { user } = useSelector((state) => state.auth);
  const button =
    user.userId === null ? (
      <></>
    ) : (
      <Link
        to={RoutesConstants.CREATE_BLOG}
        style={{ color: "red", padding: "5px" }}
        onClick={() => navi}
      >
        WRITE A NEW BLOG
      </Link>
    );
  return (
    <div className={styles.leftBar}>
      <div className={styles.left}>
        {button}
        {blogs
          .filter((blog) => blog.tag.toLowerCase().match("small"))
          .map((b, index) => (
            <SmallCard b={b} key={index} />
          ))}
      </div>
      <div className={styles.right}>
        {blogs
          .filter((blog) => blog.tag.toLowerCase().match("large"))
          .map((b, index) => (
            <BigCard b={b} key={index} />
          ))}
      </div>
    </div>
  );
};

export default LeftBar;
