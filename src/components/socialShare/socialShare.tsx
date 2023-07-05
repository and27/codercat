import Link from "next/link";
import {
  BiLogoInstagramAlt,
  BiSolidShareAlt,
  BiLogoSpotify,
} from "react-icons/bi";
import styles from "./socialShare.module.css";

const SocialShare = () => {
  return (
    <div className={styles.social}>
      <Link href="https://instagram.com">
        <BiLogoInstagramAlt size={24} />
      </Link>

      <BiSolidShareAlt size={24} />

      <Link
        href="https://open.spotify.com/playlist/37i9dQZF1DWZeKCadgRdKQ"
        target="_blank"
      >
        <BiLogoSpotify size={24} />
      </Link>
    </div>
  );
};

export default SocialShare;
