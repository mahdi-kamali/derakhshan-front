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
            <HighLight text="PREE-PRESS" marked="PREE-PRESS" />
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
          <p>PREE PRESS</p>
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
              <HighLight
                text="PHOTOGRAPHY STUDIO"
                marked="PHOTOGRAPHY STUDIO"
              />
              <p>
                Our photography studio is also available for capturing
                high-resolution and artistic photos of your products.
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
              <HighLight text="DESIGN STUDIO" marked="DESIGN STUDIO" />
              <p>
                In our design studio, it is possible to prepare high-resolution
                files, and with the help of color management and a
                spectrophotometer, we can precisely calibrate print colors to
                closely match the final output.
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
              <HighLight
                text="LITHOGRAPHY SERVICES"
                marked="LITHOGRAPHY SERVICES"
              />
              <p>
                After selecting the best design and packaging materials, it's
                time to shine with our ability to create unique and creative
                design ideas.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
