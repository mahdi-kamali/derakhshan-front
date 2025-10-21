"use client";
import HighLight from "@/components/UI/HighLight/HighLight";
import styles from "./styles.module.scss";
import Button from "@/components/UI/Button/Button";
import { motion } from "framer-motion";
import Description from "@/components/UI/Section/Description/Description";
import { ISection } from "@/types/sections.types";
import { urls } from "@/common/urls";
import { redirect } from "next/navigation";
import { LanguagesENUM } from "@/types/Language/Language.types";
import Component from "./Component/Component";

interface IProps {
  section: Extract<ISection, { type: "HOME_ABOUT_US" }>;
  language: LanguagesENUM;
}

export default function HOME_ABOUT_US(props: IProps) {
  const { section, language } = props;

  const router = redirect;

  const EN = () => {
    const EN = section.components.EN;
    const first = EN.agents[0];
    const second = EN.agents[1];
    const third = EN.agents[2];
    return (
      <>
        {/* Descriptions */}
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
                router("/EN/about-us");
              }}
            />
          </motion.div>
        </motion.div>
        {/* Agents */}
        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}>
          <motion.div
            className={styles.first}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1 }}>
            <img src={urls.STORAGE(first.image.path)} />
            <div className={styles.info}>
              <h2>{first.name}</h2>
              <p>{first.role}</p>
            </div>
          </motion.div>

          {/* Second  */}
          <motion.div
            className={styles.second}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1, delay: 0.2 }}>
            <img src={urls.STORAGE(second.image.path)} />
            <div className={styles.info}>
              <h2>{second.name}</h2>
              <p>{second.role}</p>
            </div>
          </motion.div>

          {/* Third  */}
          <motion.div
            className={styles.third}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}>
            <img src={urls.STORAGE(third.image.path)} />
            <div className={styles.info}>
              <h2>{third.name}</h2>
              <p>{third.role}</p>
            </div>
          </motion.div>
        </motion.div>
      </>
    );
  };

  const FA = () => {
    const FA = section.components.FA;
    const first = FA.agents[0];
    const second = FA.agents[1];
    const third = FA.agents[2];
    return (
      <>
        {/* Agents */}
        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}>
          {/* First */}
          <motion.div
            className={styles.first}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1 }}>
            <img src={urls.STORAGE(first.image.path)} />
            <div className={styles.info}>
              <h2>{first.name}</h2>
              <p>{first.role}</p>
            </div>
          </motion.div>

          {/* Second  */}
          <motion.div
            className={styles.second}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1, delay: 0.2 }}>
            <img src={urls.STORAGE(second.image.path)} />
            <div className={styles.info}>
              <h2>{second.name}</h2>
              <p>{second.role}</p>
            </div>
          </motion.div>

          {/* Third  */}
          <motion.div
            className={styles.third}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}>
            <img src={urls.STORAGE(third.image.path)} />
            <div className={styles.info}>
              <h2>{third.name}</h2>
              <p>{third.role}</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Descriptions */}
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}>
          <HighLight
            text={FA.title}
            marked={FA.title}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}>
            <Description>{FA.description}</Description>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}>
            <Button
              title='مشاهده بیشتر'
              variant={"primary"}
              icon='none'
              onClick={() => {
                router("/FA/about-us");
              }}
            />
          </motion.div>
        </motion.div>
      </>
    );
  };

  const RenderSection = () => {
    const types = { FA: Component(props), EN: Component(props) };
    return types[language];
  };

  return (
    <motion.section
      className={styles.aboutUs}
      lang={language}>
      <RenderSection />
    </motion.section>
  );
}
