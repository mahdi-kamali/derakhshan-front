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
              To provide luxurious and unique packaging, the services that are
              performed in the post-printing stage are very important. The
              smallest details create the most beautiful effects and results, so
              even at this stage, the most special and creative idea must be
              implemented. Our company, with state-of-the-art technology, offers
              you packaging that is the best and most unique, both visually and
              in terms of strength and durability.
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
              text: "HOT FOIL STAMPING AND EMBOSSING",
              marked: "HOT FOIL STAMPING AND EMBOSSING",
              desc: "One of the features and highlights of Derakhshan Pack Co. Tabriz Company is the use of the latest and most complete machines for hot foil stamping and embossing services. Hot foil stamping and embossing is performed using normal and three-dimensional clichés and with different materials. Even the most delicate designs can be executed. In addition, you can have a distinctive and unique experience by choosing from our unique collection of foils with various colors, effects and shades.",
            },
            {
              img: "/images/services/hero/image-8.png",

              text: "LETTERPRESS",
              marked: "LETTERPRESS",
              desc: "One of the most important steps in the final strength and stability of the box is the fundamental design of the packaging box die-cut. Given our company's long and illustrious history in providing the best die-cut models and letterpress techniques, the final box is presented to you completely flawless and with high strength and durability.",
            },
            {
              img: "/images/services/hero/image-7.png",

              text: "WINDOW PATCHING",
              marked: "WINDOW PATCHING",
              desc: "By using the window patching technique, we are able to provide visibility of the contents inside the packaged box, according to the needs of customers and the type of product. This will create a special effect for the packaging and make it easier for the end consumer to select the product.",
            },
            {
              img: "/images/services/hero/image-7.png",
              text: "LAMINATE",
              marked: "LAMINATE",
              desc: "Another special feature of our company is the use of fully automatic laminating machines using a variety of metallized, transparent, velvet matt foils and a series of unique foils to create a special visual effect and also increase the resistance of the packaging to environmental factors.",
            },
            {
              img: "/images/services/hero/image-7.png",
              text: "RIGID BOXES",
              marked: "RIGID BOXES",
              desc: "Today, one of the most luxurious and special packaging in the world is hard boxes with unique and premium designs. This company has the most equipped and advanced line of fully automatic machines for producing hard boxes or rigid boxes in a variety of models and dimensions.",
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
