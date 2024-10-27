import { useRef } from "react";
import "./search.css";

// eslint-disable-next-line react/prop-types
export default function SearchBlock({ onSearch }) {
  const inputRef = useRef(null);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputRef.current) {
      onSearch(inputRef.current.value);
      inputRef.current.value = "";
      inputRef.current.blur(); // Убираю фокус с инпута
    }
  };

  const handleButtonClick = () => {
    if (inputRef.current) {
      onSearch(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <div className="form-control">
      <input ref={inputRef} onKeyDown={handleKeyDown} type="text" required />
      <label>
        <span style={{ transitionDelay: "0ms" }}>В</span>
        <span style={{ transitionDelay: "50ms" }}>в</span>
        <span style={{ transitionDelay: "100ms" }}>е</span>
        <span style={{ transitionDelay: "150ms" }}>д</span>
        <span style={{ transitionDelay: "200ms" }}>и</span>
        <span style={{ transitionDelay: "250ms" }}>т</span>
        <span style={{ transitionDelay: "300ms" }}>е</span>
        <span style={{ transitionDelay: "350ms" }}> </span>
        <span style={{ transitionDelay: "350ms" }}>г</span>
        <span style={{ transitionDelay: "400ms" }}>о</span>
        <span style={{ transitionDelay: "450ms" }}>р</span>
        <span style={{ transitionDelay: "500ms" }}>о</span>
        <span style={{ transitionDelay: "550ms" }}>д</span>
      </label>
      <div onClick={handleButtonClick} className="ui-input-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path
            strokeLinejoin="round" // заменили stroke-linejoin на strokeLinejoin
            strokeLinecap="round" // заменили stroke-linecap на strokeLinecap
            strokeWidth="2" // заменили stroke-width на strokeWidth
            stroke="currentColor"
            d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
          />
        </svg>
      </div>
    </div>
  );
}
