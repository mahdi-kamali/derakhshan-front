// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import styles from "./styles.module.scss";
import { ReactElement, useEffect, useRef, useState } from "react";
import { SwiperOptions } from "swiper/types";
import { Navigation, Pagination } from "swiper/modules";
import { Icon } from "@iconify/react/dist/iconify.js";

interface IProps {
  children: ReactElement[] | ReactElement;
  responsive: {
    1400?: SwiperOptions;
    1000?: SwiperOptions;
    800?: SwiperOptions;
    400?: SwiperOptions;
  };
  disableArrows?: boolean;
}

export default function Slider(props: IProps) {
  const { children, responsive, disableArrows = false } = props;

  // Pagination Component
  const paginationRef = useRef<HTMLDivElement>(null);

  const [isPaginationReady, setIsPaginationReady] = useState(false);

  useEffect(() => {
    if (paginationRef.current) {
      setIsPaginationReady(true);
    }
  }, []);

  return (
    <div className={styles.container}>
      {isPaginationReady && (
        <Swiper
          className={styles.swiper}
          wrapperClass={styles.wrapper}
          slidesPerView={5}
          spaceBetween={10}
          breakpoints={responsive as SwiperOptions["breakpoints"]}
          key={paginationRef.current ? "ready" : "not-ready"}
          navigation={{
            enabled: true,
            prevEl: `.${styles.rightArrow}`,
            nextEl: `.${styles.leftArrow}`,
            disabledClass: styles.disabledArrow,
          }}
          pagination={{
            enabled: true,
            clickable: true,
            el: paginationRef.current,
            bulletActiveClass: styles.activeBullet,
            bulletClass: styles.bullet,
            renderBullet: (index, className) => {
              console.log(className);
              return `<div class="${styles.bullet} ${className}" data-index="${index}"></div>`;
            },
          }}
          modules={[Navigation, Pagination]}
        >
          {(Array.isArray(children) ? children : [children]).map(
            (child, index) => {
              return <SwiperSlide key={index}>{child}</SwiperSlide>;
            }
          )}
          {(Array.isArray(children) ? children : [children]).map(
            (child, index) => {
              return <SwiperSlide key={index}>{child}</SwiperSlide>;
            }
          )}
          {(Array.isArray(children) ? children : [children]).map(
            (child, index) => {
              return <SwiperSlide key={index}>{child}</SwiperSlide>;
            }
          )}
          {(Array.isArray(children) ? children : [children]).map(
            (child, index) => {
              return <SwiperSlide key={index}>{child}</SwiperSlide>;
            }
          )}
        </Swiper>
      )}
      <motion.div
        className={styles.controlls}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div
          className={`${styles.line} ${disableArrows && styles.disable}`}
        ></div>

        {/* Left Arrow */}
        <motion.div
          className={`${styles.leftArrow} ${disableArrows && styles.disable}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Icon icon="icon-park-outline:left-c" />
        </motion.div>

        {/* Pagination */}
        <motion.div
          className={`${styles.pagination} ${disableArrows && styles.disable}`}
          ref={paginationRef}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        ></motion.div>

        {/* Right Arrow */}
        <motion.div
          className={`${styles.rightArrow} ${disableArrows && styles.disable}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Icon icon="icon-park-outline:right-c" />
        </motion.div>

        <div className={styles.line}></div>
      </motion.div>
    </div>
  );
}
