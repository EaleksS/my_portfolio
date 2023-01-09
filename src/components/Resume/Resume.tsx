import React from 'react';
import Education from './Education';
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
      <h1>Резюме_</h1>
      <p>
        Дотошный веб-разработчик с более чем 2-летним опытом работы с
        интерфейсом и страстью к адаптивному дизайну веб-сайтов, а также твердо
        убежденный в подходе, ориентированном на мобильные устройства.
        Сертифицирован W3C. Реализован новый подход к адаптивному веб-сайту,
        который увеличил мобильный трафик на 20%.
      </p>
      <Education />
      {/* <Employment /> */}
      <GeneralSkills />
    </div>
  );
};

export default Resume;
