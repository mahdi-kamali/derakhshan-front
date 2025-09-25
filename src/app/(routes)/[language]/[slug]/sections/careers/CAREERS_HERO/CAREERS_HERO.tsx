"use client";
import HighLight from "@/components/UI/HighLight/HighLight";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import { ISection } from "@/types/sections.types";
import { LanguagesENUM } from "@/types/Language/Language.types";

interface IProps {
  section: Extract<ISection, { type: "CAREERS_HERO" }>;
  languages: LanguagesENUM;
}

export default function CAREERS_HERO(props: IProps) {
  const { section, languages } = props;

  const configs = section.components[languages];

  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.background}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}>
        <img
          src={configs.background.path}
          alt=''
          className={styles.backgroundImg}
        />
      </motion.div>

      <motion.div
        className={styles.info}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}>
        <HighLight
          text={configs.title.text}
          marked={configs.title.marked}
          firstColor={"black"}
          secondColor={"var(--color-dark-font-secondary)"}
        />
        <p>{configs.description}</p>
      </motion.div>
    </section>
  );
}
