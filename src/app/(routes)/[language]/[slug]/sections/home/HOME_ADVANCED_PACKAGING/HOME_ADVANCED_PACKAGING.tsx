"use client";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ISection } from "@/types/sections.types";
import { LanguagesENUM } from "@/types/Language/Language.types";
import Component from "./Component/Component";

interface IProps {
  section: Extract<ISection, { type: "HOME_ADVANCED_PACKAGING" }>;
  language: LanguagesENUM;
}

export default function HOME_ADVANCED_PACKAGING(props: IProps) {
  const RenderSection = () => {
    const FA = Component(props);
    const EN = Component(props);
    const types = { FA, EN };
    return types[props.language];
  };

  return (
    <motion.section className={styles.solutions}>
      <RenderSection />
    </motion.section>
  );
}
