import ListItemNav from "../ListItemNav/ListItemNav";
import styles from "./styles.module.css";

// eslint-disable-next-line react/prop-types
export default function NavHeader({ onNavClick, activeNav }) {
  return (
    <ul className={styles.header__nav}>
      <ListItemNav onNavClick={onNavClick} activeNav={activeNav} />
    </ul>
  );
}
