import React from "react";

import BlogCard from "../molecules/blogCard/BlogCard";

import { blogData } from "../../constants/blogData";

import styles from "./blogIntegration.module.scss";

const BlogIntegration = () => {
  return (
    <div className={styles.blogIntegrationContainer}>
      <div className={styles.blogIntegrationContainer__title}>
        Our <span className="orangeGradientText">Best Work</span>
      </div>
      <div className={styles.blogIntegrationContainer__blogCardWrapper}>
        {blogData.map((blog) => (
          <BlogCard data={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogIntegration;
