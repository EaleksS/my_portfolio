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
          src="https://previews.aspirity.com/spirit/assets/img/img_avatar.png"
          alt="me"
        />
        <div className={styles.info} data-aos="fade-left">
          <h1>John Anderson_</h1>
          <p>frontend developer, QA-engineer</p>
          <table>
            <tbody>
              <tr>
                <td>AGE:</td>
                <td>23</td>
              </tr>
              <tr>
                <td>PHONE:</td>
                <td>8 (234) 456-33-33</td>
              </tr>
              <tr>
                <td>EMAIL:</td>
                <td>mail@mail.com</td>
              </tr>
              <tr>
                <td>ADDRESS:</td>
                <td>Melbourne Victoria 3000 Australia</td>
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
          <h1>Hi_</h1>
          <p>
            I am Junior Web developer able to build a Web presence from the
            ground up - from concept, navigation, layout and programming to UX
            and SEO. Skilled at writing well-designed, testable and efficient
            code using current best practices in Web development. Fast learner,
            hard worker and team player who is proficient in an array of
            scripting languages and multimedia Web tools.
          </p>
          <button>
            <span>
              <RiDownload2Fill />
            </span>
            DOWNLOAD CV
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
