import { useState } from "react";
import styles from "./styles.module.css";

export default function AsideNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuImage, setMenuImage] = useState("/images/menu.png"); //для смены изображения

  const toggleSidebar = () => {
    setIsOpen((prev) => {
      const newIsOpen = !prev;
      setMenuImage(newIsOpen ? "/images/close.png" : "/images/menu.png");
      return newIsOpen;
    });
  };

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <nav>
        <ul className={styles.ul}>
          <li className={styles.sidebar_logo}>
            <a href="">
              <img
                className={styles.header__logo}
                src="/images/LoadingSun.png"
                alt=""
              />
            </a>
          </li>

          <li onClick={toggleSidebar} className={styles.li}>
            <img className={styles.img} src={menuImage} alt="" />
            <span className={styles.span}>Меню</span>
          </li>

          <li className={styles.li}>
            <img className={styles.img} src="/images/searchMenu.png" alt="" />
            <span>Поиск</span>
          </li>

          <li className={styles.li}>
            <img className={styles.img} src="/images/history.png" alt="" />
            <span className={styles.span}>История поисков</span>
          </li>

          <li className={styles.li}>
            <img className={styles.img} src="/images/location.png" alt="" />

            <span className={styles.span}>Моя геолокация</span>
          </li>

          <li className={styles.li}>
            <img className={styles.img} src="/images/support.png" alt="" />
            <span className={styles.span}>Обратная связь</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
