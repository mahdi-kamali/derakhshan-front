"use client";
import HighLight from "@/components/UI/HighLight/HighLight";
import styles from "./styles.module.scss";
import Button from "@/components/UI/Button/Button";
import { motion } from "framer-motion";
import Description from "@/components/UI/Section/Description/Description";
import { useRouter } from "next/navigation";
import { ISection } from "@/types/sections.types";
import { urls } from "@/common/urls";

interface IProps {
  section: Extract<ISection, { type: "HOME_ABOUT_US" }>;
}

export default function HOME_ABOUT_US(props: IProps) {
  const { section } = props;

  const EN = section.components.EN;

  const route = useRouter();

  const RenderAgents = () => {
    const first = EN.agents[0];
    const second = EN.agents[1];
    const third = EN.agents[2];
    return (
      <motion.div
        className={styles.right}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}>
        <motion.div
          className={styles.col}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}>
          {/* first */}
          <motion.div
            className={styles.first}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1 }}>
            <div className={styles.info}>
              <h2>{first.name}</h2>
              <p>{first.role}</p>
            </div>
            <img src={urls.STORAGE(first.image.path)} />
          </motion.div>

          {/* Second  */}
          <motion.div
            className={styles.second}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1, delay: 0.2 }}>
            <div className={styles.info}>
              <h2>{second.name}</h2>
              <p>{second.role}</p>
            </div>
            <img src={urls.STORAGE(second.image.path)} />
          </motion.div>
        </motion.div>

        {/* Third  */}
        <motion.div
          className={styles.third}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}>
          <div className={styles.info}>
            <h2>{third.name}</h2>
            <p>{third.role}</p>
          </div>
          <img src={urls.STORAGE(third.image.path)} />
        </motion.div>
      </motion.div>
    );
  };

  return (
    <motion.section className={styles.aboutUs}>
      {/* Left Section: About Us Text */}
      <RenderAgents />
      <motion.div
        className={styles.left}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}>
        <HighLight
          text={EN.title}
          marked={EN.title}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}>
          <Description>{EN.description}</Description>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}>
          <Button
            title='EXPLORE MORE'
            variant={"primary"}
            icon='none'
            onClick={() => {
              route.push("/en/about-us");
            }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
