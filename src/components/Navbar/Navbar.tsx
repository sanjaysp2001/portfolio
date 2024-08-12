import { useState } from "react";
import styles from "./Navbar.module.css";

import assets from "../../data/assets.json";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Sanjay's Portfolio
      </a>
      <img
        className={styles.menuBtn}
        src={menuOpen ? assets.nav.closeIcon : assets.nav.menuIcon}
        alt="menu-icon"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      ></img>
      <div className={styles.menu}>
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <li className={styles.links}>
            <a href="#about">About</a>
          </li>
          <li className={styles.links}>
            <a href="#experience">Experience</a>
          </li>
          <li className={styles.links}>
            <a href="#projects">Projects</a>
          </li>
          <li className={styles.links}>
            <a href="#certifications">Certifications</a>
          </li>
          <li className={styles.links}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
