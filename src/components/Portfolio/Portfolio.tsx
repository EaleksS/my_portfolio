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
      <h1>Мои проекты_</h1>
      <div className={styles.btn}>
        <button
          className={`${activeBtn === '#all' && styles.active}`}
          onClick={() => setActiveBtn('#all')}
        >
          Всё
        </button>
        <button
          className={`${activeBtn === '#react' && styles.active}`}
          onClick={() => setActiveBtn('#react')}
        >
          React
        </button>
        <button
          className={`${activeBtn === '#wordpress' && styles.active}`}
          onClick={() => setActiveBtn('#wordpress')}
        >
          Wordpress
        </button>
        <button
          className={`${activeBtn === '#verstka' && styles.active}`}
          onClick={() => setActiveBtn('#verstka')}
        >
          Верстка
        </button>
      </div>
      <Projects activeBtn={activeBtn} />
    </div>
  );
};

export default Portfolio;
