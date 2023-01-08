import React, { useEffect } from 'react';
import styles from './Footer.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className={styles.footer} id="contact" data-aos="fade-up">
      <div className={`container`}>
        <h1 data-aos="fade-right">Get in touch_</h1>
        <div className={styles.content}>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>PHONE:</td>
                  <td>
                    <a href=".#">8 (234) 456-33-33</a>
                  </td>
                </tr>
                <tr>
                  <td>SKYPE:</td>
                  <td>
                    <a href=".#">iamivanovivan</a>
                  </td>
                </tr>
                <tr>
                  <td>EMAIL:</td>
                  <td>
                    <a href=".#">mail@mail.com</a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className={styles.social}>
              <a href=".#">Facebook</a>
              <a href=".#">Linkedin</a>
              <a href=".#">GitHub</a>
              <a href=".#">Bitbucket</a>
            </div>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label>Or just write me a letter here_</label>
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Your e-mail" />
            <textarea
              cols={30}
              rows={6}
              placeholder="Type the message here"
            ></textarea>
            <button type="submit">send</button>
            <p>
              © 2016 Ivan Susanin. All Rights <br /> Reserved
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
