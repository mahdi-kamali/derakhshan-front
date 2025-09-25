"use client";
import { motion } from "framer-motion";
import HighLight from "@/components/UI/HighLight/HighLight";
import styles from "./styles.module.scss";
import Slider from "@/components/UI/Slider/Slider";
import Slide from "@/components/UI/Slider/Slide/Slide";

export default function Press() {
  const configs = [
    "/images/services/hero/image-2.png",
    "/images/services/hero/image-3.png",
    "/images/services/hero/image-4.png",
    "/images/services/hero/image-5.png",
    "/images/services/hero/image-6.png",
  ];

  return (
    <section className={styles.press}>
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
            <HighLight text="PRESS" marked="PRESS" />
            <p>
              Using the most up-to-date offset printing machines including
              normal offset and UV offset, we bring you the best printing
              quality. You are able to choose from a variety of coatings such as
              glossy, matt, effect, iriodin, UV in full or spot places. These
              coatings, in addition to increasing the protection of the printed
              material, give the packaging a special look and appeal.
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

      <div className={styles.drawer}>
        <div className={styles.title}>
          <p>PRESS</p>
        </div>
      </div>

      <div className={styles.bottom}>
        {/* Services Section */}
        <div className={styles.services}>
          {/* {[
            {
              img: "/images/services/hero/image-8.png",
              text: "NORMAL OFFSET AND UV PRINTING SERVICES",
              marked: "NORMAL OFFSET AND UV PRINTING SERVICES",
              desc: "The feel of the print can be enhanced using spot UV coating or a wide range of other special finishes such as matte, glossy, textured effects, and more.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className={styles.row}
              initial={{ opacity: 0, y: 30 }}
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
          ))} */}
        </div>
      </div>
    </section>
  );
}
