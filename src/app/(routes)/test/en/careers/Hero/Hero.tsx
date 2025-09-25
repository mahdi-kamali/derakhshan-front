"use client";
import HighLight from "@/components/UI/HighLight/HighLight";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";

export default function Hero() {
  const configs = {
    hero: {
      background: "/images/careers/background.png",
      title: {
        text: `Our Career Opportunities, 
      A Place for Your Growth and Creativity.`,
        marked: "Growth and Creativity",
      },
      description:
        "At Derakhshan Pack Co, we are looking for creative, motivated, and committed individuals to help us build a better future. If you're seeking a dynamic, friendly environment with opportunities for learning and advancement, there's a place for you on our team! Explore our career openings and join us.",
    },
  };

  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.background}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={configs.hero.background}
          alt=""
          className={styles.backgroundImg}
        />
      </motion.div>

      <motion.div
        className={styles.info}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <HighLight
          text={configs.hero.title.text}
          marked={configs.hero.title.marked}
          firstColor={"black"}
          secondColor={"var(--color-dark-font-secondary)"}
        />
        <p>{configs.hero.description}</p>
      </motion.div>
    </section>
  );
}
