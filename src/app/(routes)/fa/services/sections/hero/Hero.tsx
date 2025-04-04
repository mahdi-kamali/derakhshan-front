"use client";
import HighLight from "@/components/UI/HighLight/HighLight";
import styles from "./styles.module.scss";
import Slider from "@/components/UI/Slider/Slider";
import Slide from "@/components/UI/Slider/Slide/Slide";
import { motion } from "framer-motion";

export default function Hero() {
  const configs = [
    "/images/services/hero/image-2.png",
    "/images/services/hero/image-3.png",
    "/images/services/hero/image-4.png",
    "/images/services/hero/image-5.png",
    "/images/services/hero/image-6.png",
  ];

  return (
    <motion.section className={styles.hero}>
      {/* Hero Info Section */}
      <motion.div className={styles.info}>
        {/* Right Image */}
        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img src="/images/services/hero/image-1.png" alt="" />
        </motion.div>

        {/* Left Text */}
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <HighLight text="خدمات پیش از چاپ" marked="پیش از چاپ" />
          <p>
            مشاوره با مشتری هدف اصلی ما ارائه بهترین راه حل ها و پیشنهادات به
            مشتریان با توجه به نیازها و محصولات آنهاست. این افتخار ماست که به
            عنوان یکی از بهترین شرکت ها در ایران برای ارائه طرح های بسته بندی
            نوآورانه به مشتریان خود شناخته می شویم. توانایی ارتقاء برند
            بازاریابی و جذب .......
          </p>
        </motion.div>
      </motion.div>

      {/* Slider Section */}
      <motion.div className={styles.slider}>
        <Slider
          responsive={{
            "1000": {
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 15,
            },
            "800": {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 10,
            },
            "400": {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 10,
            },
          }}
        >
          {configs.map((slide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2, // Staggered animation
              }}
              viewport={{ once: true }}
            >
              <Slide className={styles.slide}>
                <img src={slide} alt="" />
              </Slide>
            </motion.div>
          ))}
        </Slider>
      </motion.div>

      {/* Services Section */}
      <motion.div className={styles.services}>
        <motion.div className={styles.row}>
          {/* Left Image */}
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img src="/images/services/hero/image-8.png" alt="" />
          </motion.div>

          {/* Right Text */}
          <motion.div
            className={styles.right}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <HighLight text="آتلیه عکاسی" marked="آتلیه عکاسی" />
            <p>
              ما با الهام از جدیدترین خلاقیت، تصاویری با وضوح بالا از محصول خود
              را به شما پیشنهاد می کنیم تا برند خود را در بازار به نمایش
              بگذارید.
            </p>
          </motion.div>
        </motion.div>

        <motion.div className={styles.row}>
          {/* Left Image */}
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img src="/images/services/hero/image-7.png" alt="" />
          </motion.div>

          {/* Right Text */}
          <motion.div
            className={styles.right}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <HighLight text="استودیو طراحی" marked="استودیو طراحی" />
            <p>
              پس از انتخاب بهترین طرح و مواد بسته بندی، وقت آن است که با توانایی
              خود در طراحی ایده های منحصر به فرد و خلاقانه بدرخشیم.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
