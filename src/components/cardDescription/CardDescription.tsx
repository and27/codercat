"use client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { motion } from "framer-motion";
import styles from "./cardDescription.module.css";

function renderRichText(richTextField: any) {
  return documentToReactComponents(richTextField);
}

const CardDescription = ({ description }: any) => {
  return (
    <motion.div
      className={styles.description}
      initial={{ x: 100 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, delay: 0.6, ease: "easeInOut" },
      }}
    >
      {renderRichText(description)}
    </motion.div>
  );
};

export default CardDescription;
