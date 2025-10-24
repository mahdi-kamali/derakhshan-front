import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import { urls } from "@/common/urls";
import Button from "@/components/UI/Button/Button";
import Description from "@/components/UI/Section/Description/Description";
import HighLight from "@/components/UI/HighLight/HighLight";
import { ISection } from "@/types/sections.types";
import { LanguagesENUM } from "@/types/Language/Language.types";
import { redirect } from "next/navigation";

interface IProps {
  section: Extract<ISection, { type: "HOME_ABOUT_US" }>;
  language: LanguagesENUM;
}

export default function Component(props: IProps) {
  const router = redirect;

  const { language, section } = props;

  const component = section.components[language];
  const first = component.agents[0];
  const second = component.agents[1];
  const third = component.agents[2];

  return (
    <section className={styles.aboutUs}>
      {/* Descriptions */}
      <motion.div
        className={styles.left}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}>
        <HighLight
          text={component.title}
          marked={component.title}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}>
          <Description>{component.description}</Description>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}>
          <Button
            title={
              language === LanguagesENUM.FA ? "مشاهده بیشتر" : "Explore More"
            }
            variant={"primary"}
            icon='none'
            onClick={() => {
              router("/FA/about-us");
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
        {/* First */}
        <motion.div
          className={styles.agent}
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
          className={styles.agent}
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
          className={styles.agent}
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
    </section>
  );
}
