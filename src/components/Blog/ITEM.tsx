import React from 'react';
import styles from './Blog.module.scss';

const ITEM = () => {
  return (
    <div className={styles.item}>
      <img
        src="https://previews.aspirity.com/spirit/assets/img/img_blog_1.png"
        alt="blog"
      />
      <div className={styles.content}>
        <h2>October 22, 2017</h2>
        <h3>How to use css-preprocessor</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempr incididunt...
        </p>
      </div>
    </div>
  );
};

export default ITEM;
