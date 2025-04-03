// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import styles from "./styles.module.scss";
import { ReactElement } from "react";
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
}

export default function Slider(props: IProps) {
  const { children, responsive } = props;
  return (
    <div className={styles.container}>
      <Swiper
        className={styles.swiper}
        wrapperClass={styles.wrapper}
        slidesPerView={5}
        spaceBetween={10}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={responsive as any}
        navigation={{
          enabled: true,
          prevEl: `.${styles.rightArrow}`,
          nextEl: `.${styles.leftArrow}`,
          disabledClass: styles.disabledArrow,
        }}
        pagination={{
          el: `.${styles.pagination}`,
          bulletElement: `.${styles.bullet}`,
          bulletClass: styles.bullet,
          clickable :true ,
          bulletActiveClass : styles.activeBullet ,
          renderBullet: (index, className) => {
            return `<div class="${styles.bullet} ${className}" data-index="${index}"></div>`;
          },
        }}
        modules={[Navigation, Pagination]}>
        {(Array.isArray(children) ? children : [children]).map((child) => {
          return <SwiperSlide>{child}</SwiperSlide>;
        })}
        {(Array.isArray(children) ? children : [children]).map((child) => {
          return <SwiperSlide>{child}</SwiperSlide>;
        })}
        {(Array.isArray(children) ? children : [children]).map((child) => {
          return <SwiperSlide>{child}</SwiperSlide>;
        })}
        {(Array.isArray(children) ? children : [children]).map((child) => {
          return <SwiperSlide>{child}</SwiperSlide>;
        })}
      </Swiper>
      <div className={styles.controlls}>
        <div className={styles.line}></div>
        <div className={styles.leftArrow}>
          <Icon icon='icon-park-outline:left-c' />
        </div>
        <div className={styles.pagination}>
          <div className={styles.bullet}>
            <Icon icon='tabler:circle-filled' />
          </div>
        </div>
        <div className={styles.rightArrow}>
          <Icon icon='icon-park-outline:right-c' />
        </div>
        <div className={styles.line}>

        </div>
      </div>
    </div>
  );
}
