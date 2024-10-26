import { useRef } from "react";
import styles from "./styles.module.css";

// eslint-disable-next-line react/prop-types
export default function SearchBlock({ onSearch }) {
  const inputRef = useRef(null);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputRef.current) {
      onSearch(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  const handleButtonClick = () => {
    if (inputRef.current) {
      onSearch(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <div className={styles.div}>
      <input
        ref={inputRef}
        onKeyDown={handleKeyDown}
        className={styles.search__input}
        placeholder="Введите город"
        type="text"
      />
      <button className={styles.search} onClick={handleButtonClick}>
        <img src="/images/search.png" alt="" />
      </button>
    </div>
  );
}
