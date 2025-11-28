import { urls } from "@/common/urls";
import HighLight from "@/components/UI/HighLight/HighLight";
import Description from "@/components/UI/Section/Description/Description";
import Slide from "@/components/UI/Slider/Slide/Slide";
import Slider from "@/components/UI/Slider/Slider";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { ISection } from "@/types/sections.types";
import { LanguagesENUM } from "@/types/Language/Language.types";

type IProps = {
  language: LanguagesENUM;
} & (
  | {
      section: Extract<ISection, { type: "POST_PRESS" }>;
    }
  | {
      section: Extract<ISection, { type: "PRESS" }>;
    }
  | {
      section: Extract<ISection, { type: "PREE_PRESS" }>;
    }
);

export default function Component(props: IProps) {
  const { language, section } = props;

  const component = section.components[language];

  const bottomRef = useRef<HTMLDivElement>(null);

  const [drawerVisible, setDrawerVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When top section is OUT of view → show drawer
        setDrawerVisible(entry.isIntersecting);
      },
      {
        threshold: 0.25, // trigger as soon as it enters
      },
    );

    if (bottomRef.current) observer.observe(bottomRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.section
      className={styles.hero}
      lang={language}>
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
            <Description>{component.description}</Description>
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

      <div
        className={[styles.drawer, drawerVisible && styles.showDrawer].join(
          " ",
        )}>
        <div className={styles.title}>
          <p>{component.title}</p>
        </div>
      </div>

      <div
        className={styles.bottom}
        ref={bottomRef}>
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
                  <Description>{service.description}</Description>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
