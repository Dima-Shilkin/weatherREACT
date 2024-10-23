import HistoryBlock from "../HistoryBlock/HistoryBlock";
import SearchBlock from "../SearchBlock/SearchBlock";
import SupprotBlock from "../SypprotBlock/SypprotBlock";
import styles from "./styles.module.css";

const navItems = [
  {
    id: "history",
    label: "ИСТОРИЯ",
    component: <HistoryBlock />,
    icon: "/images/history.png",
    altText: "Иконка история запросов",
  },
  {
    id: "search",
    label: "ПОИСК",
    component: <SearchBlock />,
    icon: "/images/search.png",
    altText: "Иконка поиска",
  },
  {
    id: "support",
    label: "ПОДДЕРЖКА",
    component: <SupprotBlock />,
    icon: "/images/support.png",
    altText: "Иконка поддержки",
  },
];

// eslint-disable-next-line react/prop-types
export default function ListItemNav({ onNavClick, activeNav }) {
  return (
    <>
      {navItems.map((item) => (
        <li
          key={item.id}
          onClick={() => onNavClick(item.component, item.id)}
          className={`${styles.li} ${
            activeNav === item.id ? styles.active : ""
          }`}
        >
          <span className={styles.header__nav_item}>{item.label}</span>
          <img
            className={styles.header__nav_img}
            src={item.icon}
            alt={item.altText}
          />
        </li>
      ))}
    </>
  );
}
