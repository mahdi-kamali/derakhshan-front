import { Icon } from "@iconify/react/dist/iconify.js";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      className={styles.hero}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div
        className={styles.logo}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <img src="/images/logo.png" alt="" />
      </motion.div>

      <motion.div
        className={styles.slug}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <img src="/images/slug.png" alt="" />
        <p>«خواسته شما اولویت ماست.»</p>
      </motion.div>

      <motion.p
        className={styles.description}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        با بیش از 72 سال تجربه درخشان در صنعت چاپ و بسته بندی.
      </motion.p>

      <motion.div
        className={styles.contact}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <div className={styles.row}>
          <div className={styles.right}>
            <span>+98 4136373751-2</span>
          </div>
          <div className={styles.left}>
            <span>تلفن:</span>
            <Icon icon="gg:phone" />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.right}>
            <span>+98 4136373753</span>
          </div>
          <div className={styles.left}>
            <span>فکس:</span>
            <Icon icon="mingcute:fax-fill" />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
