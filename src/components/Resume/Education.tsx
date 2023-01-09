import React from 'react';
import styles from './Resume.module.scss';

const Education = () => {
  return (
    <div className={styles.education}>
      <h3>ОБРАЗОВАНИЕ</h3>
      <div>
        <h2>УНИВЕРСИТЕТ МИННЕСОТЫ В ГОРОДАХ-ПОБРАТИМАХ</h2>
        <small>2006 - 2010</small>
        <p>Бакалавр компьютерной инженерии</p>
      </div>
      <div>
        <h2>ШКОЛА ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ</h2>
        <small>2004 - 2005</small>
        <p>
          ---
        </p>
      </div>
      <div>
        <h2>ШКОЛА</h2>
        <small>2003 - 2006</small>
        <p style={{ marginBottom: 0 }}>
          ---
        </p>
      </div>
    </div>
  );
};

export default Education;
