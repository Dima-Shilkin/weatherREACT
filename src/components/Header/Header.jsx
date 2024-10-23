import { useState } from "react";
import NavHeader from "../NavHeader/NavHeader";
import styles from "./styles.module.css";

// eslint-disable-next-line react/prop-types
export default function Header({ onNavClick, activeNav }) {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toogleNavVisible = (e) => {
    e.preventDefault();
    setIsNavVisible((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <a onClick={toogleNavVisible} className={styles.header__logo} href="">
          <img src="/images/LoadingSun.png" alt="Логотип" />
        </a>
        <div
          className={`${styles.navHeader} ${isNavVisible ? styles.active : ""}`}
        >
          <NavHeader onNavClick={onNavClick} activeNav={activeNav} />
        </div>
      </div>
    </header>
  );
}
