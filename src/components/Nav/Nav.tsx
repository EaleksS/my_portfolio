import React, { useEffect, useState } from 'react';
import styles from './Nav.module.scss';

const Nav = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <nav className={`${styles.nav} ${scroll && styles.active}`}>
      <div className={`container ${styles.links} ${scroll && styles.linksActive}`}>
        <a href="#hello">HELLO</a>
        <a href="#resume">RESUME</a>
        <a href="#portfolio">PORTFOLIO</a>
        <a href="#testimonials">TESTIMONIALS</a>
        <a href="#blog">BLOG</a>
        <a href="#contact">CONTACT</a>
      </div>
    </nav>
  );
};

export default Nav;
