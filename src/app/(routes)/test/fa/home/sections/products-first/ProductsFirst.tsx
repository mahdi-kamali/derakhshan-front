import HighLight from "@/components/UI/HighLight/HighLight";
import styles from "./styles.module.scss";
import Button from "@/components/UI/Button/Button";
import { motion } from "framer-motion";
import Description from "@/components/UI/Section/Description/Description";
import { useRouter } from "next/navigation";

export default function ProductsFirst() {
  const route = useRouter();

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
          <img src="/images/products-first/image-1.png" alt="" />
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
          <img src="/images/products-first/image-2.png" alt="" />
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
          <img src="/images/products-first/image-3.png" alt="" />
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
        <HighLight text="محصولات ما" marked="محصولات ما" />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          viewport={{ once: true }}
        >
          <Description>
            همواره اصلی ترین دغدغه شرکت، توانایی ارائه متنوع ترین و گسترده ترین
            مجموعه ای از انواع جعبه های لوکس به مشتریان عزیز در زمینه های مختلف
            میباشد. صنایع غذایی- آرایشی بهداشتی- داروئی و حتی صنایع دستی. تا آن
            ها بتوانند از میان کالکشن بی نظیر محصولات ما به تناسب نیاز خود
            انتخاب نمایند.
          </Description>
        </motion.div>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          viewport={{ once: true }}
        >
          <Button
            title="مشاهده بیشتر"
            variant={"primary"}
            icon="none"
            onClick={() => {
              route.push("/FA/products");
            }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
