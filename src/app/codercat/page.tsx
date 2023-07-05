import Image from "next/image";
import styles from "./codercat.module.css";
import globalStyles from "../page.module.css";
import catImg from "../../../public/codercat_acostado.png";
// import { motion } from "framer-motion";
import getContentfulData from "@/lib/getDataEntries";
import { use } from "react";
import Navigation from "@/components/navigation/navigation";
import SocialShare from "@/components/socialShare/socialShare";

const Codercat = () => {
  const tips = use(getContentfulData("tip"));
  const tipRaw = tips[0].fields;
  const title = tipRaw.title as string;
  const date = new Date(tipRaw.date as string).toLocaleString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
      <div className={`${styles.codercatModule}  ${globalStyles.container}`}>
        <Navigation />
        <div className={styles.catImg}>
          <Image src={catImg} alt="" width={300} height={145} />
        </div>
        <main className={styles.contentCard}>
          <div className={styles.sliderLeft}>&lsaquo;</div>
          <div className={styles.sliderRight}>&rsaquo;</div>
          <div className={styles.headingContent}>
            <div className={styles.headingContentInner}>
              <p className={styles.category}>Accesibility</p>
              <p className={styles.date}>{date}</p>
              <h1>{title}</h1>

              {/* v2 <SocialShare /> */}
            </div>
          </div>
          <div className={styles.description}>
            <p>
              Perceivable Content must be consumable by screen readers and other
              assistive technologies.
            </p>
            <p>
              Operable Keyboard accesible. Control animations, and provide
              enought time limits for completing actions like submitting forms.
            </p>
            <p>
              Understandable Use clear and concise language. Provide clear
              labels and understandable flows
            </p>
            <p>
              Perceivable Content must be consumable by screen readers and other
              assistive technologies. Operable Keyboard accesible. Control
              animations, and provide enought time limits for completing actions
              like submitting forms. Understandable Use clear and concise
              language. Provide clear labels and understandable flows
            </p>
            <p>
              Perceivable Content must be consumable by screen readers and other
              assistive technologies. Operable Keyboard accesible. Control
              animations, and provide enought time limits for completing actions
              like submitting forms. Understandable Use clear and concise
              language. Provide clear labels and understandable flows
            </p>
            <p>
              Operable Keyboard accesible. Control animations, and provide
              enought time limits for completing actions like submitting forms.
            </p>
            <p>
              Operable Keyboard accesible. Control animations, and provide
              enought time limits for completing actions like submitting forms.
            </p>
          </div>
        </main>
      </div>
    </>
  );
};

export default Codercat;
