import React from 'react';
import styles from './Resume.module.scss';

const Education = () => {
  return (
    <div className={styles.education}>
      <h3>EDUCATION</h3>
      <div>
        <h2>UNIVERSITY OF MINNESOTA TWIN CITIES</h2>
        <small>2006 - 2010</small>
        <p>Bachelor Computer Engineering Lorem</p>
      </div>
      <div>
        <h2>SCHOOL OF INFORMATIONAL TECHNOLOGIES</h2>
        <small>2004 - 2005</small>
        <p>
          Awesome student, lorem ipsum dolor sit amet, conse ctetur adipisicing{' '}
          <br />
          elit, sed do eius- mod tempor incididunt ut labore et dolore magna
          aliqua. <br /> Ut enim ad minim veniam, quis
        </p>
      </div>
      <div>
        <h2>LOREM IPSUM SCHOOL</h2>
        <small>2003 - 2006</small>
        <p style={{ marginBottom: 0 }}>
          Student, Lorem ipsum dolor sit amet, consecte tur adipisicing elit,
          sed do <br /> eiusmod tempor incididunt ut
        </p>
      </div>
    </div>
  );
};

export default Education;
