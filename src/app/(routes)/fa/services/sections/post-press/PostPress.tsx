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
              desc: "یکی از ویژگی ها و نقاط برجسته شرکت درخشان پاک تبریز، استفاده از جدیدترین و کامل ترین دستگاه ها برای خدمات طلاکوبی و برجسته زنی میباشد. طلاکوبی و برجسته زنی توسط کلیشه های  نرمال و سه بعدی و با جنس های مختلف اجرا میشود. حتی ظریف ترین طرح ها و نوشته ها قابل طراحی و اجرا میباشد . علاوه بر این شما میتوانید با انتخاب از بین مجموعه  بی نظیر فویل های ما با رنگ ها ، افکت ها و شیدهای متنوع ، تجربه ای متمایز و بی نظیر  داشته باشید",
            },
            {
              img: "/images/services/hero/image-8.png",
              text: "لترپرس",
              marked: "لترپرس",
              desc: "یکی از مراحل بسیار حائز اهمیت در استحکام و ایستایی نهایی جعبه ، طراحی اصولی تیغ قالب جعبه بسته بندی یا همان دایکات میباشد. با توجه به سابقه طولانی و درخشان شرکت ما در ارائه بهترین مدل های دایکات و تکنیک های لترپرس، جعبه نهایی کاملا بی نقص و با استحکام و دوام بالا به شما ارائه میگردد.",
            },
            {
              img: "/images/services/hero/image-7.png",
              text: "پنجره چسبانی",
              marked: "پنجره چسبانی",
              desc: "با استفاده از تکنیک پنجره چسبانی قادر هستیم به تناسب نیاز مشتریان و نوع محصول، امکان دیده شدن محتویات داخل جعبه بسته بندی شده را فراهم آوریم.این امر ضمن خلق جلوه ای خاص به بسته بندی انتخاب محصول توسط مصرف کننده نهایی را آسانتر خواهد کرد.",
            },
            {
              img: "/images/services/hero/image-7.png",
              text: "لمینت",
              marked: "لمینت",
              desc: "یکی دیگر از امکانات ویژه شرکت ما استفاده از ماشین آلات تمام اتوماتیک لمینیت با استفاده از انواع فویل های متالایز، شفاف، مات مخملی و یک سری فویل های منحصربفرد برای ایجاد جلوه بصری خاص و همچنین افزایش مقاومت بسته بندی در مقابل عوامل محیطی میباشد.",
            },
            {
              img: "/images/services/hero/image-7.png",
              text: "جعبه های هارد باکس",
              marked: "جعبه های هارد باکس",
              desc: "امروزه یکی از لوکس ترین و خاص ترین بسته بندی های دنیا جعبه های هاردباکس با طراحی های منحصربفرد و ممتاز میباشد. این شرکت دارای مجهزترین و پیشرفته ترین لاین دستگاه های تمام اتوماتیک تولید جعبه های سخت یا همان هاردباکس در انواع مدل ها و ابعاد میباشد.",
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
