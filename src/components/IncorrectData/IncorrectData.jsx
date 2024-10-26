import styles from "./styles.module.css";

export default function IncorrectData() {
  return (
    <div className={styles.error}>
      <h3>Вы ввели неккоректные данные</h3>
    </div>
  );
}
