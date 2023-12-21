import React, { useState } from "react";
import styles from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img className={styles.icon} src="/assets/icons.png" alt="" />
      <a className={styles.title} href="/">
        JesPster
      </a>
      <div className={styles.menu}>
        <ul className={styles.menuItems}>
          <li>
            <a className={styles.navlinks} href="#about">About</a>
          </li>
          <li>
            <a className={styles.navlinks} href="#experience">Experience</a>
          </li>
          <li>
            <a className={styles.navlinks} href="#projects">Projects</a>
          </li>
          <li>
            <a className={styles.navlinks} href="#skills">Skills</a>
          </li>
          <li>
            <a className={styles.navlinks} href="#design">Design</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
