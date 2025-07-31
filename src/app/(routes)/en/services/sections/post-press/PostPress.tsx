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
            <HighLight text="POST-PRESS" marked="POST-PRESS" />
            <p>
              Consultation with Customer Our main aim is to offer our customers
              the best solutions and suggestions according to their needs and
              products. It is our honor to be recognized as one of the best
              companies in Iran to provide innovative packaging designs to our
              customers. The ability to enhance the marketing brand and
              capture.......
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
          <p>POST PRESS</p>
        </div>
      </div>

      <div ref={bottomRef} className={styles.bottom}>
        {/* Services Section */}
        <div className={styles.services}>
          {[
            {
              img: "/images/services/hero/image-7.png",
              text: "FOIL STAMPING",
              marked: "FOIL STAMPING",
              desc: "After selecting the best design and packaging materials, it's time to shine with our ability to craft unique and creative ideas.",
            },
            {
              img: "/images/services/hero/image-8.png",
              text: "EMBOSSING",
              marked: "EMBOSSING",
              desc: "Inspired by the latest creativity, we offer high-resolution visuals of your product to showcase your brand in the market.",
            },
            {
              img: "/images/services/hero/image-7.png",
              text: "WINDOW PASTING",
              marked: "WINDOW PASTING",
              desc: "After selecting the best design and packaging materials, it's time to shine with our ability to craft unique and creative ideas.",
            },
            {
              img: "/images/services/hero/image-7.png",
              text: "LAMINATION",
              marked: "LAMINATION",
              desc: "After selecting the best design and packaging materials, it's time to shine with our ability to craft unique and creative ideas.",
            },
            {
              img: "/images/services/hero/image-7.png",
              text: "HARD BOXES",
              marked: "HARD BOXES",
              desc: "After selecting the best design and packaging materials, it's time to shine with our ability to craft unique and creative ideas.",
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
