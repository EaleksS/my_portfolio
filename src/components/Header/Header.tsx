import React from 'react';
import styles from './Header.module.scss';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { RiDownload2Fill } from 'react-icons/ri';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.bg}></div>
      <div className={`container ${styles.me}`}>
        <img
          data-aos="flip-right"
          src="https://via.placeholder.com/300x400"
          alt="me"
        />
        <div className={styles.info} data-aos="fade-left">
          <h1>Имя Фамилия_</h1>
          <p>frontend разработчик</p>
          <table>
            <tbody>
              <tr>
                <td>возраст:</td>
                <td>18</td>
              </tr>
              <tr>
                <td>телефон:</td>
                <td>
                  <a href=".#">8 (999) 999-99-99</a>
                </td>
              </tr>
              <tr>
                <td>Почта:</td>
                <td>
                  <a href=".#">ealkser@gmail.com</a>
                </td>
              </tr>
              <tr>
                <td>Адресс:</td>
                <td>Россия Республика Саха (Якутия), г. Якутск</td>
              </tr>
            </tbody>
          </table>
          <div className={styles.social}>
            <a href=".#">
              <BsGithub />
            </a>
            <a href=".#">
              <BsLinkedin />
            </a>
            <a href=".#">
              <BsFacebook />
            </a>
          </div>
        </div>
      </div>
      <div
        className={`container ${styles.hello}`}
        id="hello"
        data-aos="fade-right"
      >
        <div>
          <h1>Привет_</h1>
          <p>
            Я младший веб-разработчик, способный создать веб-присутствие с с
            нуля - от концепции, навигации, верстки и программирования до UX и
            SEO. Умею писать хорошо продуманный, тестируемый и эффективный кода
            с использованием современных передовых методов веб-разработки.
            Быстрая обучаемость, трудолюбивый работник и командный игрок,
            владеющий целым рядом языков сценариев и мультимедийных
            веб-инструментов.
          </p>
          <button>
            <span>
              <RiDownload2Fill />
            </span>
            СКАЧАТЬ РЕЗЮМЕ
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
