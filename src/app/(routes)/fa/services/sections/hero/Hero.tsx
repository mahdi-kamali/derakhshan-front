"use client";
import { useEffect, useRef } from "react";
import HighLight from "@/components/UI/HighLight/HighLight";
import styles from "./styles.module.scss";
import Slider from "@/components/UI/Slider/Slider";
import Slide from "@/components/UI/Slider/Slide/Slide";
import { motion } from "framer-motion";

export default function Hero() {
  const bottomRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleHeroHeight = () => {
      const bottom = bottomRef.current;
      const container = containerRef.current;
      if (bottom && container) {
        const bottomHeight = bottom.offsetHeight;
        container.style.height = `calc(100vh + ${bottomHeight}px)`;
      }
    };
  
    const waitForImages = () => {
      const images = containerRef.current?.querySelectorAll("img") || [];
      if (images.length === 0) {
        handleHeroHeight();
        return;
      }
  
      let loaded = 0;
      const checkDone = () => {
        loaded++;
        if (loaded === images.length) handleHeroHeight();
      };
  
      images.forEach((img) => {
        if (img.complete) {
          checkDone();
        } else {
          img.addEventListener("load", checkDone, { once: true });
          img.addEventListener("error", checkDone, { once: true });
        }
      });
    };
  
    waitForImages();
    window.addEventListener("resize", handleHeroHeight);
  
    return () => {
      window.removeEventListener("resize", handleHeroHeight);
    };
  }, []);
  
  

  const configs = [
    "/images/services/hero/image-2.png",
    "/images/services/hero/image-3.png",
    "/images/services/hero/image-4.png",
    "/images/services/hero/image-5.png",
    "/images/services/hero/image-6.png",
  ];

  return (
    <motion.section ref={containerRef} className={styles.hero}>
      <div className={styles.top}>
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
              مشاوره با مشتری مهمترین گام در یافتن بهترین راه حل برای دستیابی به
              بهترین نتایج بی‌نقص است، بنابراین ما ترجیح می‌دهیم بیشتر وقت و
              انرژی خود را در این بخش به دستیابی به طراحی و بسته‌بندی نوآورانه و
              مناسب برای هر مشتری اختصاص دهیم. <br />
              در مرکز ما می‌توانیم به مشتریان خود نمونه‌سازی با مواد مختلف ارائه
              دهیم تا بتوانند ابعاد نهایی را برای نمایش محصولات خود درک کنند.
            </p>
          </motion.div>
        </motion.div>

        {/* Slider Section */}
        <motion.div
          className={styles.slider}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: false }}
        >
          <Slider
            responsive={{
              "1000": { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 15 },
              "800": { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 },
              "400": { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 },
            }}
            disableArrows={true}
          >
            {configs.map((slide, index) => (
              <motion.div
                key={`hero${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: false }}
              >
                <Slide className={styles.slide}>
                  <img src={slide} />
                </Slide>
              </motion.div>
            ))}
          </Slider>
        </motion.div>
      </div>

      <div className={styles.drawer}>
        <div className={styles.title}>
          <p>خدمات پیش از چاپ</p>
        </div>
      </div>

      <div ref={bottomRef} className={styles.bottom}>
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
                استودیوی عکاسی ما نیز برای گرفتن عکس‌های با وضوح بالا و هنری از
                محصولات شما در دسترس است.
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
                در استودیوی طراحی ما امکان تهیه فایل‌ها با وضوح بالا وجود دارد و
                با کمک مدیریت رنگ و اسپکتروفتومتر می‌توانیم رنگ‌های چاپ را با
                تنظیمات بسیار دقیق و دقیقاً مشابه خروجی نهایی تنظیم کنیم.
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
              <HighLight text="خدمات لیتوگرافی" marked="خدمات لیتوگرافی" />
              <p>
                پس از انتخاب بهترین طرح و مواد بسته بندی، وقت آن است که با
                توانایی خود در طراحی ایده های منحصر به فرد و خلاقانه بدرخشیم.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
