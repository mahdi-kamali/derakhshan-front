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
              Consulting with customer is the most important step in finding the
              best solution to get the best perfect results, therefore we prefer
              to dedicate most of our time and energy in this part to achieve
              innovative design and packaging most suitable for each customers
              demands. In this regard, sample making and providing a prototype
              of the box using different materials in real dimensions and sizes
              can help customers to observe more accurately and make better
              decisions.
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
                Certainly one of the most important parts of any company is its
                ideation, creativity and design. Our design studio strives to
                provide the best suggestions to enhance your brand and thus
                differentiate your packaging. In this unit, print files are
                color-separated with the help of color management technology and
                we provide you with completely consistent and uniform print
                samples that comply with printing standards.
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
                One of the important and sensitive parts of this lithography
                industry is the use of the most up-to-date machinery and the
                best materials, which plays a significant role in the final
                quality of the print.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
