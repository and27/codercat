import ThemeSwitcher from "@/components/themSwitcher/themeSwitcher";
import { BiWorld } from "react-icons/bi";
import styles from "./topBar.module.css";
import globalStyles from "../../app/page.module.css";

const TopBar = () => (
  <div className={styles.topMenu}>
    <p>CODERCAT</p>
    <div className={styles.options}>
      <ThemeSwitcher />
      <button className={styles.option} title={"Switch language"}>
        <BiWorld size={16} />
        <span className={globalStyles.visually_hidden}>Language Switcher</span>
      </button>
    </div>
  </div>
);

export default TopBar;
