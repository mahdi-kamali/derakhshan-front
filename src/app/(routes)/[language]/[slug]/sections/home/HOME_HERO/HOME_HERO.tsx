"use client";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import Logo from "@/components/icons/DerakhshanLogo/Logo";
import { ISection } from "@/types/sections.types";

interface IProps {
  section: Extract<ISection, { type: "HOME_HERO" }>;
  language: "en" | "fa";
}

export default function HOME_HERO(props: IProps) {
  const { section, language } = props;

  const fa = () => {
    const FA = section.components.FA;

    return (
      <div className={styles.staticContent}>
        <motion.div
          className={styles.logo}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}>
          <Logo src={FA.logo.path} />
          <div className={styles.text}>
            <h1>DERAKHSHAN PACK CO.</h1>
          </div>
        </motion.div>

        <motion.div
          className={styles.description}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}>
          <div className={styles.slug}>YOUR WISH IS OUR COMMAND.</div>
          <div className={styles.content}>{FA.experience}</div>
        </motion.div>
      </div>
    );
  };

  const en = () => {
    const EN = section.components.EN;

    return (
      <div className={styles.staticContent}>
        <motion.div
          className={styles.logo}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}>
          <Logo src={EN.logo.path} />
          <div className={styles.text}>
            <h1>DERAKHSHAN PACK CO.</h1>
          </div>
        </motion.div>

        <motion.div
          className={styles.description}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}>
          <div className={styles.slug}>YOUR WISH IS OUR COMMAND.</div>
          <div className={styles.content}>{EN.experience}</div>
        </motion.div>
      </div>
    );
  };

  const RenderSection = () => {
    const types = { fa, en };
    return types[language]();
  };

  return (
    <motion.section
      className={styles.hero}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}>
      <RenderSection />
    </motion.section>
  );
}
