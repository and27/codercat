"use client";
import SocialShare from "../socialShare/socialShare";
import styles from "./cardHeading.module.css";
import { motion } from "framer-motion";

interface ICardHeadingProps {
  category: string;
  date: string;
  title: string;
}
const CardHeading: React.FC<ICardHeadingProps> = ({
  category,
  date,
  title,
}) => {
  const readableDate = new Date(date).toLocaleString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className={styles.headingContent}>
      <div className={styles.headingContentInner}>
        <motion.p
          animate={{
            opacity: 1,
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
          className={styles.category}
        >
          {category}
        </motion.p>
        <motion.p
          animate={{
            opacity: 1,
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
          className={styles.date}
        >
          {readableDate}
        </motion.p>
        <motion.h1
          initial={{ y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.8, ease: "easeInOut" },
          }}
        >
          {title}
        </motion.h1>
        <motion.div
          className={styles.socialContainer}
          initial={{ y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.4, duration: 0.8, ease: "easeInOut" },
          }}
        >
          <SocialShare />
        </motion.div>
      </div>
    </div>
  );
};

export default CardHeading;
