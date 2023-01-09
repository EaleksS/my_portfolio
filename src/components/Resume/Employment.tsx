import React from 'react';
import styles from './Resume.module.scss';

const Employment = () => {
  return (
    <div className={styles.education}>
      <h3>РАБОТА</h3>
      <div>
        <h2>APPLE</h2>
        <small>2006 - 2010</small>
        <p>Senior Full Stack Developer</p>
      </div>
      <div>
        <h2>ТЕХНИЧЕСКИЙ УНИВЕРСИТЕТ</h2>
        <small>2004 - 2005</small>
        <p>
          Awesome student, lorem ipsum dolor sit amet, conse ctetur adipisicing
          elit, sed do eius- mod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis
        </p>
      </div>
      <div>
        <h2>LOREM IPSUM SCHOOL</h2>
        <small>2003 - 2006</small>
        <p style={{ marginBottom: 0 }}>
          Programmer Lorem ipsum dolor sit amet, consecte tur adipisicing elit,
          sed do eiusmod tempor incididunt ut
        </p>
      </div>
    </div>
  );
};

export default Employment;
