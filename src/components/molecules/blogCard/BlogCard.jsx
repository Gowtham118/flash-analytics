import React from "react";

import styles from "./blogCard.module.scss";

const BlogCard = ({ data }) => {
  return (
    <a href={data.blogLink}>
      <div className={styles.cardContainer} >
        <div className={styles.cardImage}>
          <img src={data.image} alt="service icon" />
        </div>
        <div className={styles.cardTitle}>{data.title}</div>
        <div className={styles.cardText}>{data.description}</div>
      </div>
    </a>
  );
};

export default BlogCard;
