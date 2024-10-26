import styles from "./styles.module.css";
import { useState } from "react";
import { useEffect } from "react";

export default function StartComponent() {
  const [isVisible, setIsVisible] = useState(true);
  const [isDelete, setIsDelete] = useState(false); //это я делаю для плавного удаления

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDelete(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 1000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className={`${styles.loadingConteiner} ${
            isDelete ? styles.hidden : ""
          }`}
        >
          <h2 className={styles.loadingConteiner__title}>Openweathermap</h2>
          <img
            className={styles.loadingConteiner__img}
            src="/images/LoadingSun.png"
            alt="Логотип сайта в виде солнца"
          />
        </div>
      )}
    </>
  );
}
