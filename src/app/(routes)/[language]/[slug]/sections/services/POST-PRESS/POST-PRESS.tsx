"use client";
import { useEffect, useRef } from "react";
import HighLight from "@/components/UI/HighLight/HighLight";
import styles from "./styles.module.scss";
import Slider from "@/components/UI/Slider/Slider";
import Slide from "@/components/UI/Slider/Slide/Slide";
import { motion } from "framer-motion";
import { ISection } from "@/types/sections.types";
import { LanguagesENUM } from "@/types/Language/Language.types";
import { urls } from "@/common/urls";

interface IProps {
  section: Extract<ISection, { type: "POST_PRESS" }>;
  language: LanguagesENUM;
}

export default function SERVICE(props: IProps) {
  const { section,language } = props;

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

  const component = section.components[language];

  return (
    <motion.section
      ref={containerRef}
      className={styles.hero}>
      <div className={styles.top}>
        {/* Hero Info Section */}
        <motion.div className={styles.info}>
          {/* Right Image */}
          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}>
            <img src={urls.STORAGE(component.image.path)} />
          </motion.div>

          {/* Left Text */}
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}>
            <HighLight
              text={component.title}
              marked={component.title}
            />
            <p>{component.description}</p>
          </motion.div>
        </motion.div>

        {/* Slider Section */}
        <motion.div
          className={styles.slider}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: false }}>
          <Slider
            responsive={{
              "1000": { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 15 },
              "800": { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 },
              "400": { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 },
            }}
            disableArrows={true}>
            {component.gallery.map((gallery, index) => (
              <motion.div
                key={`hero${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: false }}>
                <Slide className={styles.slide}>
                  <img src={urls.STORAGE(gallery.path)} />
                </Slide>
              </motion.div>
            ))}
          </Slider>
        </motion.div>
      </div>

      <div className={styles.drawer}>
        <div className={styles.title}>
          <p>{component.title}</p>
        </div>
      </div>

      <div
        ref={bottomRef}
        className={styles.bottom}>
        {/* Services Section */}
        <motion.div className={styles.services}>
          {component.services.map((service, index) => {
            return (
              <motion.div
                className={styles.row}
                key={service.title}>
                {/* Left Image */}
                <motion.div
                  className={styles.left}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: index * 0.5,
                  }}
                  viewport={{ once: false }}>
                  <img
                    src={urls.STORAGE(service.image.path)}
                    alt=''
                  />
                </motion.div>

                {/* Right Text */}
                <motion.div
                  className={styles.right}
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: index * 0.5,
                  }}
                  viewport={{ once: true }}>
                  <HighLight
                    text={service.title}
                    marked={service.title}
                  />
                  <p>{service.description}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
