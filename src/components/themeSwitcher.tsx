"use client";
import { BiSolidMoon } from "react-icons/bi";
import styles from "./themSwitcher.module.css";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const handleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <button onClick={handleTheme} className={styles.option}>
      <BiSolidMoon size={16} />
    </button>
  );
};

export default ThemeSwitcher;
