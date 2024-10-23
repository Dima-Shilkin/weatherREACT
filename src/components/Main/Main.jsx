import styles from "./styles.module.css";

// eslint-disable-next-line react/prop-types
export default function Main({ children }) {
  return <main className={styles.main}>{children}</main>;
}
