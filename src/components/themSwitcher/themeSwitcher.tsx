"use client";
import { BiSolidMoon } from "react-icons/bi";
import { useTheme } from "next-themes";
import styles from "./themSwitcher.module.css";
import globalStyles from "../../app/page.module.css";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const handleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <button onClick={handleTheme} className={styles.option} title={"Theme"}>
      <BiSolidMoon size={16} />
      <span className={globalStyles.visually_hidden}>Theme Switcher</span>
    </button>
  );
};

export default ThemeSwitcher;
