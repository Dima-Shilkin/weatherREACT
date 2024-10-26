import styles from "./styles.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.header__logo} href="">
        <img src="/images/LoadingSun.png" alt="" />
      </a>
      <div>
        <h1 className={styles.header__title}>Openweathermap</h1>
        <p className={styles.header__description}>Прогноз погоды</p>
      </div>
    </header>
  );
}
