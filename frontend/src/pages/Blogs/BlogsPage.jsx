import React from "react";
import styles from "./BlogsPage.module.css";
import MainBlog from "./components/mainblog/MainBlog";
import RightBar from "./components/rightbar/RightBar";
import LeftBar from "./components/leftbar/LeftBar";
import blogs from "../../../data/blogs";
const BlogsPage = () => {
  const mainBlog = blogs.filter((blog) =>
    blog.tag.toLowerCase().match("main")
  )[0];

  return (
    <div className={styles.blogsPage}>
      <div className={styles.leftSide}>
        <MainBlog mainBlog={mainBlog} key={mainBlog.id} />
        <LeftBar />
      </div>
      <div className={styles.rightSide}>
        <RightBar />
      </div>
    </div>
  );
};

export default BlogsPage;
