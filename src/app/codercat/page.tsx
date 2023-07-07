import Image from "next/image";
import styles from "./codercat.module.css";
import globalStyles from "../page.module.css";
import catImg from "../../../public/codercat_acostado.png";
import { getTipsbyDate } from "@/lib/getDataEntries";
import { use } from "react";
import TopBar from "@/components/topBar/topBar";
import CardHeading from "@/components/cardHeading/CardHeading";
import CardDescription from "@/components/cardDescription/CardDescription";

const Codercat = () => {
  const currentDate = new Date();
  currentDate.setMinutes(0);
  const isoDate = currentDate.toISOString().split("T")[0]; //get yyyy:mm:dd
  const currentTip = use(getTipsbyDate(isoDate));
  const tip = currentTip?.fields;

  return (
    <>
      <div className={`${styles.codercatModule}  ${globalStyles.container}`}>
        <TopBar />
        <div className={styles.catImg}>
          <Image src={catImg} alt="" width={300} height={145} />
        </div>
        <main className={styles.contentCard}>
          {/* <div className={styles.sliderLeft}>&lsaquo;</div>
          <div className={styles.sliderRight}>&rsaquo;</div> */}
          <CardHeading
            title={tip.title as string}
            date={tip.date as string}
            category={tip.category as string}
          />
          <CardDescription description={tip.description} />
        </main>
      </div>
    </>
  );
};

export default Codercat;
