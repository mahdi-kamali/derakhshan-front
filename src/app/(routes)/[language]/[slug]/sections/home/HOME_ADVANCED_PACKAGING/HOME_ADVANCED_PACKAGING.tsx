"use client";
import HighLight from "@/components/UI/HighLight/HighLight";
import styles from "./styles.module.scss";
import Button from "@/components/UI/Button/Button";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ISection } from "@/types/sections.types";
import { urls } from "@/common/urls";
import { LanguagesENUM } from "@/types/Language/Language.types";

interface IProps {
  section: Extract<ISection, { type: "HOME_ADVANCED_PACKAGING" }>;
  language: LanguagesENUM;
}

export default function HOME_ADVANCED_PACKAGING(props: IProps) {
  const { section, language } = props;

  const route = useRouter();

  const EN = () => {
    const EN = section.components.EN;

    return (
      <>
        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}>
          <img
            src={urls.STORAGE(EN.image.path)}
            alt=''
          />
        </motion.div>

        <motion.div
          className={styles.left}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}>
          <HighLight
            text={EN.title}
            marked={EN.title}
          />

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}>
            {EN.description}
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            viewport={{ once: true }}>
            <Button
              title='EXPLORE MORE'
              variant={"primary"}
              icon='none'
              onClick={() => {
                route.push("/EN/services");
              }}
            />
          </motion.div>
        </motion.div>
      </>
    );
  };

  const FA = () => {
    const FA = section.components.FA;

    return (
      <>
        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}>
          <img
            src={urls.STORAGE(FA.image.path)}
            alt=''
          />
        </motion.div>

        <motion.div
          className={styles.left}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}>
          <HighLight
            text={FA.title}
            marked={FA.title}
          />

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}>
            {FA.description}
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            viewport={{ once: true }}>
            <Button
              title='مشاهده بیشتر'
              variant={"primary"}
              icon='none'
              onClick={() => {
                route.push("/EN/services");
              }}
            />
          </motion.div>
        </motion.div>
      </>
    );
  };

  const RenderSection = () => {
    const types = { FA, EN };
    return types[language]();
  };

  return (
    <motion.section className={styles.solutions}>
      <RenderSection />
    </motion.section>
  );
}
