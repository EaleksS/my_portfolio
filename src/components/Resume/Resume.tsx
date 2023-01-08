import React from 'react';
import Education from './Education';
import Employment from './Employment';
import GeneralSkills from './GeneralSkills';
import styles from './Resume.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Resume = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className={`${styles.resume} container`}
      id="resume"
      data-aos="fade-right"
    >
      <h1>Resume_</h1>
      <p>
        Lorem ipsum dolor sit amet, communication adipisicing elit, helpful
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud sence of humour ullamco laboris nisi ut
        honest ea commodo consequat. Duis aute irure dolor in upper-intermediate
        english level velit dolore eu ivivdtevoluptatem ontend developer.
      </p>
      <Education />
      <Employment />
      <GeneralSkills />
    </div>
  );
};

export default Resume;
