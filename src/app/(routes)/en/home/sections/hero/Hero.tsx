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
      <div className={styles.staticContent}>
        <motion.div
          className={styles.logo}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img src="/images/logo.png" alt="" className={styles.image} />
          <div className={styles.text}>
            <h1>DERAKHSHAN PACK CO.</h1>
          </div>
        </motion.div>

        <motion.div
          className={styles.description}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className={styles.slug}>YOUR WISH IS OUR COMMAND.</div>
          <div className={styles.content}>
            With more then 80 years of shining experience <br />
            in printing and packaging industry.
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
