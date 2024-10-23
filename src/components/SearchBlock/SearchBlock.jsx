import styles from "./styles.module.css";

export default function SearchBlock() {
  return (
    <input className={styles.search__input} placeholder="Введите город"></input>
  );
}
