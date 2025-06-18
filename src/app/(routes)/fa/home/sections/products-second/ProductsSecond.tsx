import HighLight from "@/components/UI/HighLight/HighLight";
import styles from "./styles.module.scss";
import Button from "@/components/UI/Button/Button";
import { motion } from "framer-motion";
import Description from "@/components/UI/Section/Description/Description";

export default function ProductsSecond() {
  return (
    <motion.section className={styles.ProductsFirst}>
      {/* Right Side: Product Images (Async Pop-in Mode with Delay) */}
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
          viewport={{ once: true }}
        >
          <img src="/images/products-second/image-3.png" alt="" />
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
          viewport={{ once: true }}
        >
          <img src="/images/products-second/image-1.png" alt="" />
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
          viewport={{ once: true }}
        >
          <img src="/images/products-second/image-2.png" alt="" />
        </motion.div>
      </motion.div>

      {/* Left Side: Text & Button (Fade & Slide from Top) */}
      <motion.div
        className={styles.left}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay: 0.9, // Delay to match the images' pop-in timing
        }}
        viewport={{ once: true }}
      >
        <HighLight text="جعبه های کادویی انحصاری" marked="کادویی" />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          viewport={{ once: true }}
        >
          <Description>
            تخصص ما ساخت جعبه های هدیه لوکس و منحصر به فرد با استفاده از مواد
            مختلف است که برای پاسخگویی به مشتریانی با سلیقه های ظریف طراحی شده
            است.
          </Description>
        </motion.div>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          viewport={{ once: true }}
        >
          <Button title="مشاهده بیشتر" variant={"primary"} icon="none" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
