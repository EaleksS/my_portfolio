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
        <h1 data-aos="fade-right">Свяжитесь со мной_</h1>
        <div className={styles.content}>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>ТЕЛЕФОН:</td>
                  <td>
                    <a href="tel:89999999999">8 (999) 999-99-99</a>
                  </td>
                </tr>
                <tr>
                  <td>DISCORD:</td>
                  <td>
                    <a
                      href="https://discord.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      discordName
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>ПОЧТА:</td>
                  <td>
                    <a href="mailto:ealkser@gmail.com">ealkser@gmail.com</a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className={styles.social}>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noreferrer">
                Whatsapp
              </a>
              <a href="https://discord.com" target="_blank" rel="noreferrer">
                Discord
              </a>
              <a href="https://telegram.org" target="_blank" rel="noreferrer">
                Telegram
              </a>
            </div>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label>Или просто напишите мне письмо здесь_</label>
            <input type="text" placeholder="Ваше имя" />
            <input type="email" placeholder="Ваш e-mail" />
            <textarea
              cols={30}
              rows={6}
              placeholder="Введите ваше сообщение здесь"
            ></textarea>
            <button type="submit">Отправить</button>
            <p>© 2023 Эрнест Алексеев.</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
