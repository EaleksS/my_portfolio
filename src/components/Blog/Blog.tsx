import React from 'react';
import styles from './Blog.module.scss';
import ITEM from './ITEM';

const Blog = () => {
  return (
    <div className={`${styles.blog} container`} id="blog">
      <h1>Latest Posts_</h1>
      <div className={styles.items}>
        <ITEM />
        <ITEM />
        <ITEM />
      </div>
    </div>
  );
};

export default Blog;
