"use client";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import HighLight from "@/components/UI/HighLight/HighLight";
import { ISection } from "@/types/sections.types";
import { urls } from "@/common/urls";

interface IProps {
  section: Extract<ISection, { type: "ABOUT_US_MAIN" }>;
}

export default function ABOUT_US_MAIN(props: IProps) {
  const { section } = props;

  const { EN } = section.components;

  return (
    <section className={styles.hero}>
      {/* Background Image */}
      <motion.div
        className={styles.background}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}>
        <img
          src={"/images/about-us/background.png"}
          alt=''
        />
      </motion.div>
      {/* Company Image - Fades in first */}
      <motion.div
        className={styles.company}
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 2.5, delay: 0, ease: "easeInOut" }}
        viewport={{ once: true }}>
        <img
          src={urls.STORAGE(EN.background.path)}
          alt=''
        />
      </motion.div>
      {/* Agents List */}
      <motion.div
        className={styles.agents}
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 5,
          delay: 0,
        }}>
        <motion.div className={styles.list}>
          {EN.agents.map((agent, index) => (
            <motion.div
              className={styles.agent}
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index + 0.5, ease: "easeOut" }} // Ensures agents appear one by one after company fades in
              viewport={{ once: true }}>
              <div className={styles.left}>
                <img
                  src={urls.STORAGE(agent.image.path)}
                  alt=''
                />
              </div>
              <div className={styles.right}>
                <div className={styles.name}>{agent.name}</div>
                <div className={styles.roles}>
                  <span> {agent.role}</span>
                </div>
                {/* <div className={styles.email}>{agent.}</div> */}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Info Section */}
        <motion.div
          className={styles.info}
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          viewport={{ once: true }}>
          <HighLight
            text='AGENT LIST'
            marked='LIST'
          />
          <p>
            We are an offset printing company with experience since 1972,
            specializing in luxury packaging. It is our honor to offer you
            custom and unique packaging tailored to your needs.
          </p>
        </motion.div>
      </motion.div>
      <section className={styles.stories}>
        {EN.generations.map((generation, index) => (
          <motion.div
            className={styles.item}
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            viewport={{ once: true }}>
            <div className={styles.right}>
              <img
                src={urls.STORAGE(generation.image.path)}
                alt=''
              />
            </div>
            <div className={styles.left}>
              <HighLight
                text={generation.title}
                marked={generation.title}
              />
              <p>{generation.description}</p>
            </div>
          </motion.div>
        ))}
      </section>
    </section>
  );
}
