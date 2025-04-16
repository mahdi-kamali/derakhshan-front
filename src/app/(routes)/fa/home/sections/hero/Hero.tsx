import { Icon } from "@iconify/react/dist/iconify.js";
import styles from "./styles.module.scss";
import { animate, motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      className={styles.hero}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}>
      <motion.div
        className={styles.logo}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}>
        <img
          src='/images/logo.png'
          alt=''
          className={styles.image}
        />
        <img
          className={styles.text}
          src='/images/slug.png'
          alt=''
        />
      </motion.div>

      <motion.div
        className={styles.description}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}>
        <div className={styles.slug}>«خواسته شما اولویت ماست»</div>
        <div className={styles.content}>
          با بیش از 72 سال سابقه درخشان در صنعت چاپ و بسته بندی
        </div>
      </motion.div>

      <motion.div
        className={styles.contact}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay : 1.5
        }}>
        <div className={styles.row}>
          <div className={styles.right}>
            <span>+98 4136373751-2</span>
          </div>
          <div className={styles.left}>
            <span>تلفن:</span>
            <Icon icon='gg:phone' />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.right}>
            <span>+98 4136373753</span>
          </div>
          <div className={styles.left}>
            <span>فکس:</span>
            <Icon icon='mingcute:fax-fill' />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
