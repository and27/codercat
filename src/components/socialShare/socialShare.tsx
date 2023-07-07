import Link from "next/link";
import {
  BiLogoInstagramAlt,
  BiSolidShareAlt,
  BiLogoSpotify,
} from "react-icons/bi";
import styles from "./socialShare.module.css";
import globalStyles from "../../app/page.module.css";

const SocialShare = () => {
  return (
    <div className={styles.social}>
      <Link href="https://instagram.com" title={"Instagram profile"}>
        <BiLogoInstagramAlt size={24} />
        <span className={globalStyles.visually_hidden}>Instagram</span>
      </Link>

      <BiSolidShareAlt size={24} />

      <Link
        href="https://open.spotify.com/playlist/37i9dQZF1DWZeKCadgRdKQ"
        target="_blank"
        title={"Spotify podcast"}
      >
        <BiLogoSpotify size={24} />
        <span className={globalStyles.visually_hidden}>
          Spotify Codercat Podcast
        </span>
      </Link>
    </div>
  );
};

export default SocialShare;
