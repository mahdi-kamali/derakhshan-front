import Button from "@/components/UI/Button/Button";
import HighLight from "@/components/UI/HighLight/HighLight";
import Description from "@/components/UI/Section/Description/Description";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import styles from "./styles.module.scss";
import { ISection } from "@/types/sections.types";
import { LanguagesENUM } from "@/types/Language/Language.types";
import { urls } from "@/common/urls";

interface IProps {
  section: Extract<ISection, { type: "HOME_EXCLUSIVE_GIFT_BOXES" }>;
  language: LanguagesENUM;
}

export default function Component(props: IProps) {
  const { language, section } = props;

  const route = useRouter();
  const component = section.components[language];

  return (
    <motion.section className={styles.HOME_EXCLUSIVE_GIFT_BOXES}>
      <motion.div className={styles.right}>
        <motion.div
          className={styles.first}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0, // No delay for the first image
          }}
          viewport={{ once: true }}>
          <img
            src={urls.STORAGE(component.images[0].path)}
            alt=''
          />
        </motion.div>

        <motion.div
          className={styles.second}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.3, // 0.3s delay for the second image
          }}
          viewport={{ once: true }}>
          <img
            src={urls.STORAGE(component.images[1].path)}
            alt=''
          />
        </motion.div>

        <motion.div
          className={styles.third}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.6, // 0.6s delay for the third image
          }}
          viewport={{ once: true }}>
          <img
            src={urls.STORAGE(component.images[2].path)}
            alt=''
          />
        </motion.div>
      </motion.div>
      <motion.div
        className={styles.left}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay: 0.9, // Delay to match the images' pop-in timing
        }}
        viewport={{ once: true }}>
        <HighLight
          text={component.title}
          marked={component.title}
        />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          viewport={{ once: true }}>
          <Description>{component.description}</Description>
        </motion.div>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          viewport={{ once: true }}>
          <Button
            title={
              language === LanguagesENUM.FA ? "مشاهده بیشتر" : "Explore More"
            }
            variant={"primary"}
            icon='none'
            onClick={() => {
              route.push("/EN/products");
            }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
