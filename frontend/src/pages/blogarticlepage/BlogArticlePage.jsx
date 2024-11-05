import React from "react";
import styles from "./BlogArticlePage.module.css";

const BlogArticlePage = ({ title, author, date, content }) => {
  return (
    <div className={styles.blogContainer}>
      <header className={styles.blogHeader}>
        <h1 className={styles.blogTitle}>{title}</h1>
        <div className={styles.blogMeta}>
          <span className={styles.blogAuthor}>By {author}</span>
          <span className={styles.blogDate}>
            {new Date(date).toLocaleDateString()}
          </span>
        </div>
      </header>

      <main className={styles.blogcontent}>{content}</main>

      <section className={styles.blogComments}>
        <h2 className={styles.commentsTitle}>Comments</h2>
        {/* Comments list or form can go here */}
      </section>
    </div>
  );
};

export default BlogArticlePage;
