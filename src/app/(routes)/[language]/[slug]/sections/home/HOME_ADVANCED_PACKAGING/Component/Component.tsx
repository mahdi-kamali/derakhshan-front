import { motion } from "framer-motion";
import HighLight from "@/components/UI/HighLight/HighLight";
import Button from "@/components/UI/Button/Button";
import { ISection } from "@/types/sections.types";
import { LanguagesENUM } from "@/types/Language/Language.types";
import { urls } from "@/common/urls";
import styles from "./styles.module.scss";
import { redirect } from "next/navigation";
interface IProps {
  section: Extract<ISection, { type: "HOME_ADVANCED_PACKAGING" }>;
  language: LanguagesENUM;
}
export default function Component(props: IProps) {
  const { language, section } = props;
  const component = section.components[props.language];

  return (
    <>
      <motion.div
        className={styles.left}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: true }}>
        <HighLight
          text={component.title}
          marked={component.title}
        />

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          viewport={{ once: true }}>
          {component.description}
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          viewport={{ once: true }}>
          <Button
            title={language === "FA" ? "مشاهده بیشتر" : "Explore More"}
            variant={"primary"}
            icon='none'
            onClick={() => {
              redirect("/EN/services");
            }}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.right}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}>
        <img
          src={urls.STORAGE(component.image.path)}
          alt=''
        />
      </motion.div>
    </>
  );
}
