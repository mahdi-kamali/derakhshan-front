"use client";
import HighLight from "@/components/UI/HighLight/HighLight";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";

export default function Hero() {
  const configs = {
    hero: {
      background: "/images/careers/background.png",
      title: {
        text: `فرصت‌های شغلی ما، 
جایی برای رشد و خلاقیت شما.`,
        marked: "رشد و خلاقیت",
      },
      description:
        "شرکت درخشان به دنبال افرادی خلاق، باانگیزه و متعهد هستیم که به ما در ساخت آینده‌ای بهتر کمک کنند. اگر به دنبال محیطی پویا، دوستانه و با فرصت‌های یادگیری و پیشرفت هستید، جای شما در تیم ما خالی است! فرصت‌های شغلی ما را بررسی کنید و به جمع ما بپیوندید.",
    },
  };

  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.background}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}>
        <img
          src={configs.hero.background}
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
          text={configs.hero.title.text}
          marked={configs.hero.title.marked}
        />
        <p>{configs.hero.description}</p>
      </motion.div>
    </section>
  );
}
