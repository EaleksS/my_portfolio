import React from 'react';
import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <nav className={`${styles.nav}`}>
      <div className={`container ${styles.links}`}>
        <a href=".#">HELLO</a>
        <a href=".#">RESUME</a>
        <a href=".#">PORTFOLIO</a>
        <a href=".#">TESTIMONIALS</a>
        <a href=".#">BLOG</a>
        <a href=".#">CONTACT</a>
      </div>
    </nav>
  );
};

export default Nav;
