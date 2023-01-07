import React from 'react';
import styles from './Resume.module.scss';

const GeneralSkills = () => {
  return (
    <div className={styles.generalSkills}>
      <h3>GENERAL SKILLS</h3>
      <table>
        <tr>
          <td>
            <label htmlFor="file">HTML5</label>
            <progress id="file" max="100" value="80">
              80%
            </progress>
            <div className={styles.progressValue}></div>
            <div className={styles.progressBg}>
              <div className={styles.progressBar}></div>
            </div>
          </td>
          <td>
            <label htmlFor="file">BOOTSTRAP 3</label>
            <progress id="file" max="100" value="80">
              80%
            </progress>
            <div className={styles.progressValue}></div>
            <div className={styles.progressBg}>
              <div className={styles.progressBar}></div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="file">CSS3</label>
            <progress id="file" max="100" value="70">
              70%
            </progress>
            <div className={styles.progressValue}></div>
            <div className={styles.progressBg}>
              <div className={styles.progressBar}></div>
            </div>
          </td>
          <td>
            <label htmlFor="file">GRUNT</label>
            <progress id="file" max="100" value="60">
              60%
            </progress>
            <div className={styles.progressValue}></div>
            <div className={styles.progressBg}>
              <div className={styles.progressBar}></div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="file">JAVA SCRIPT</label>
            <progress id="file" max="100" value="90">
              90%
            </progress>
            <div className={styles.progressValue}></div>
            <div className={styles.progressBg}>
              <div className={styles.progressBar}></div>
            </div>
          </td>
          <td>
            <label htmlFor="file">GIT</label>
            <progress id="file" max="100" value="90">
              90%
            </progress>
            <div className={styles.progressValue}></div>
            <div className={styles.progressBg}>
              <div className={styles.progressBar}></div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="file">JQUERY</label>
            <progress id="file" max="100" value="80">
              80%
            </progress>
            <div className={styles.progressValue}></div>
            <div className={styles.progressBg}>
              <div className={styles.progressBar}></div>
            </div>
          </td>
          <td>
            <label htmlFor="file">ADOBE PHOTOSHOP</label>
            <progress id="file" max="100" value="80">
              80%
            </progress>
            <div className={styles.progressValue}></div>
            <div className={styles.progressBg}>
              <div className={styles.progressBar}></div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default GeneralSkills;
