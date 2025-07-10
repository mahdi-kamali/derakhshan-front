"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import HighLight from "@/components/UI/HighLight/HighLight";
import styles from "./styles.module.scss";
import Slider from "@/components/UI/Slider/Slider";
import Slide from "@/components/UI/Slider/Slide/Slide";

export default function PostPress() {
  const bottomRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const handlePostPressHeight = () => {
    if (bottomRef.current && containerRef.current) {
      const bottomHeight = bottomRef.current.offsetHeight;
      containerRef.current.style.height = `calc(100vh + ${bottomHeight}px)`;
    }
  };
  handlePostPressHeight();
  useEffect(() => {
    handlePostPressHeight();
    window.addEventListener("resize", handlePostPressHeight);
  }, []);

  const configs = [
    "/images/services/hero/image-2.png",
    "/images/services/hero/image-3.png",
    "/images/services/hero/image-4.png",
    "/images/services/hero/image-5.png",
    "/images/services/hero/image-6.png",
  ];

  return (
    <section ref={containerRef} className={styles.PostPress}>
      <div className={styles.top}>
        {/* Info Section */}
        <motion.div
          className={styles.info}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <img src="/images/services/press/main.png" alt="" />
          </motion.div>

          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: false }}
          >
            <HighLight text="خدمات پس از چاپ" marked="پس از چاپ" />
            <p>
              در بخش پس از چاپ، ما از مهرزنی فویل داغ، برجسته‌سازی، برش قالبی،
              وصله پنجره، چسب‌زنی، لمینت و خط تولید کامل بسته‌بندی‌های جعبه سخت
              با جدیدترین ماشین‌آلات اروپایی پشتیبانی می‌کنیم.
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
                key={index}
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

      {/* drawer title section */}
      <div className={styles.drawer}>
        <div className={styles.title}>
          <p>خدمات پس از چاپ</p>
        </div>
      </div>

      <div ref={bottomRef} className={styles.bottom}>
        {/* Services Section */}
        <div className={styles.services}>
          {[
            {
              img: "/images/services/hero/image-7.png",
              text: "طلاکوبی",
              marked: "طلاکوبی",
              desc: "پس از انتخاب بهترین طرح و مواد بسته بندی، وقت آن است که با توانایی خود در طراحی ایده های منحصر به فرد و خلاقانه بدرخشیم.",
            },
            {
              img: "/images/services/hero/image-8.png",
              text: "برجسته زنی",
              marked: "برجسته زنی",
              desc: "ما با الهام از جدیدترین خلاقیت، تصاویری با وضوح بالا از محصول خود را به شما پیشنهاد می کنیم تا برند خود را در بازار به نمایش بگذارید.",
            },
            {
              img: "/images/services/hero/image-7.png",
              text: "پنجره چسبانی",
              marked: "پنجره چسبانی",
              desc: "پس از انتخاب بهترین طرح و مواد بسته بندی، وقت آن است که با توانایی خود در طراحی ایده های منحصر به فرد و خلاقانه بدرخشیم.",
            },
            {
              img: "/images/services/hero/image-7.png",
              text: "لمینت",
              marked: "لمینت",
              desc: "پس از انتخاب بهترین طرح و مواد بسته بندی، وقت آن است که با توانایی خود در طراحی ایده های منحصر به فرد و خلاقانه بدرخشیم.",
            },
            {
              img: "/images/services/hero/image-7.png",
              text: "جعبه های هادر باکس",
              marked: "جعبه های هادر باکس",
              desc: "پس از انتخاب بهترین طرح و مواد بسته بندی، وقت آن است که با توانایی خود در طراحی ایده های منحصر به فرد و خلاقانه بدرخشیم.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className={styles.row}
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.3,
              }}
              viewport={{ once: false }}
            >
              <div className={styles.left}>
                <img src={service.img} alt="" />
              </div>
              <div className={styles.right}>
                <HighLight text={service.text} marked={service.marked} />
                <p>{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
