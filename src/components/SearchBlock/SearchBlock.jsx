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

  return (
    <>
      <input
        ref={inputRef}
        onKeyDown={handleKeyDown}
        className={styles.search__input}
        placeholder="Введите город"
        type="text"
      />
      <button onClick={handleKeyDown}>+</button>
    </>
  );
}
