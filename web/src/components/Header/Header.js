import React from "react";
import { Link } from "gatsby";
import Button from "../Button/Button";
import Logo from "../Logo";
import * as styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={`container ${styles.header}`}>
      <a href="/" className={styles.logo}>
        <span className="sr-only">Back to homepage</span>
        <Logo />
      </a>
      <button className={styles.menu__toggle}>
        <span className="sr-only">Open menu</span>
        <span className={styles.toggle__line} aria-hidden="true"></span>
        <span className={styles.toggle__line} aria-hidden="true"></span>
      </button>
      <nav className={styles.header__nav}>
        <ul className={styles.menu__list}>
          <li className={styles.menu__item}>
            <Link to="/stories">Stories</Link>
          </li>
          <li className={styles.menu__item}>
            <Link to="/features">Features</Link>
          </li>
          <li className={styles.menu__item}>
            <Link to="/pricing">Pricing</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.button__container}>
        <Button variant="primary">Get an invite</Button>
      </div>
    </header>
  );
};

export default Header;
