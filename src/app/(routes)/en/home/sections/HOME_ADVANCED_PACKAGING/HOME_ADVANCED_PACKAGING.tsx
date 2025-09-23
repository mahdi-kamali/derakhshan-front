"use client";
import HighLight from "@/components/UI/HighLight/HighLight";
import styles from "./styles.module.scss";
import Button from "@/components/UI/Button/Button";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ISection } from "@/types/sections.types";
import { urls } from "@/common/urls";

interface IProps {
  section: Extract<ISection, { type: "HOME_ADVANCED_PACKAGING" }>;
}

export default function HOME_ADVANCED_PACKAGING(props: IProps) {
  const { section } = props;

  const EN = section.components.EN;

  const route = useRouter();
  return (
    <motion.section className={styles.solutions}>
      {/* Right Section: Image (Fade & Slide from Right) */}
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

      {/* Left Section: Text & Button (Fade In First, Then Slide Down) */}
      <motion.div
        className={styles.left}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: true }}>
        <HighLight
          text='Advanced Packaging Solutions'
          marked='Advanced Packaging Solutions'
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
              route.push("/en/services");
            }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
