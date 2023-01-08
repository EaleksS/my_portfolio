import React, { useState } from 'react';
import styles from './Portfolio.module.scss';
import Projects from './Projects';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {
  const [activeBtn, setActiveBtn] = useState('#all');

  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className={`${styles.portfolio} container`}
      id="portfolio"
      data-aos="fade-right"
    >
      <h1>My projects_</h1>
      <div className={styles.btn}>
        <button
          className={`${activeBtn === '#all' && styles.active}`}
          onClick={() => setActiveBtn('#all')}
        >
          ALL
        </button>
        <button
          className={`${activeBtn === '#mobile' && styles.active}`}
          onClick={() => setActiveBtn('#mobile')}
        >
          MOBILE APPS
        </button>
        <button
          className={`${activeBtn === '#web' && styles.active}`}
          onClick={() => setActiveBtn('#web')}
        >
          WEB-SITES
        </button>
        <button
          className={`${activeBtn === '#landing' && styles.active}`}
          onClick={() => setActiveBtn('#landing')}
        >
          LANDING PAGES
        </button>
      </div>
      <Projects activeBtn={activeBtn} />
    </div>
  );
};

export default Portfolio;
