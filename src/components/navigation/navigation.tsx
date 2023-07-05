import ThemeSwitcher from "@/components/themeSwitcher";
import { BiWorld } from "react-icons/bi";
import styles from "./navigation.module.css";

const Navigation = () => (
  <div className={styles.topMenu}>
    <p>CODERCAT</p>
    <div className={styles.options}>
      <ThemeSwitcher />
      <button className={styles.option}>
        <BiWorld size={16} />
      </button>
    </div>
  </div>
);

export default Navigation;
