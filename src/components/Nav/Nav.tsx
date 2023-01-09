import React, { useEffect, useState } from 'react';
import styles from './Nav.module.scss';
import { GiHamburgerMenu } from 'react-icons/gi';

const Nav = () => {
  const [scroll, setScroll] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <nav className={`${styles.nav} ${scroll && styles.active}`}>
      <div
        className={`container ${styles.links}  ${
          scroll && styles.linksActive
        } ${styles.activeWeb}`}
      >
        <a href="#hello">HELLO</a>
        <a href="#resume">RESUME</a>
        <a href="#portfolio">PORTFOLIO</a>
        <a href="#testimonials">TESTIMONIALS</a>
        <a href="#blog">BLOG</a>
        <a href="#contact">CONTACT</a>
      </div>
      {/* Burger menu */}
      <div
        className={`container ${styles.links}  ${
          scroll && styles.linksActive
        } ${styles.activeTable}`}
      >
        <span onClick={() => setOpenMenu(true)}>
          <GiHamburgerMenu />
        </span>
      </div>
      {/* Modal menu */}
      {openMenu && (
        <div className={`container`}>
          <div className={`${styles.loyaut}`}>
            <span onClick={() => setOpenMenu(false)}>x</span>
          </div>
          <div className={`${styles.menu}`}>
            <div>
              <a href="#hello" onClick={() => setOpenMenu(false)}>
                HELLO
              </a>
              <a href="#resume" onClick={() => setOpenMenu(false)}>
                RESUME
              </a>
              <a href="#portfolio" onClick={() => setOpenMenu(false)}>
                PORTFOLIO
              </a>
              <a href="#testimonials" onClick={() => setOpenMenu(false)}>
                TESTIMONIALS
              </a>
              <a href="#blog" onClick={() => setOpenMenu(false)}>
                BLOG
              </a>
              <a href="#contact" onClick={() => setOpenMenu(false)}>
                CONTACT
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
