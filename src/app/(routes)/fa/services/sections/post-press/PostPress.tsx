"use client";
import HighLight from "@/components/UI/HighLight/HighLight";
import styles from "./styles.module.scss";
import Slider from "@/components/UI/Slider/Slider";
import Slide from "@/components/UI/Slider/Slide/Slide";

export default function PostPress() {
  const configs = [
    "/images/services/hero/image-2.png",
    "/images/services/hero/image-3.png",
    "/images/services/hero/image-4.png",
    "/images/services/hero/image-5.png",
    "/images/services/hero/image-6.png",
  ];

  return (
    <section className={styles.PostPress}>
      <div className={styles.info}>
        <div className={styles.right}>
          <img
            src='/images/services/press/main.png'
            alt=''
          />
        </div>
        <div className={styles.left}>
          <HighLight
            text='خدمات پس از چاپ'
            marked='پس از چاپ'
          />
          <p>
            از ماشین های دایک کات و چسب تا لمینیت، وصله پنجره، خط تمام اتوماتیک
            جعبه های سفت و سخت، برجسته سازی، و مهر زنی داغ، ما یک خط تولید کامل
            برای بسته های جعبه سخت ارائه می دهیم. برای ایجاد طرح های خیره کننده،
            از بین رنگ های مختلف فویل از جمله طلایی، نقره ای، سبز  انتخاب
            کنید.
          </p>
        </div>
      </div>
      <div className={styles.slider}>
        <Slider
          responsive={{
            "1000": {
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 15,
            },
            "800": {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 10,
            },
            "400": {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 10,
            },
          }}>
          {configs.map((slide) => {
            return (
              <Slide className={styles.slide}>
                <img src={slide} />
              </Slide>
            );
          })}
        </Slider>
      </div>
      <div className={styles.services}>
        <div className={styles.row}>
          <div className={styles.left}>
            <img
              src='/images/services/hero/image-8.png'
              alt=''
            />
          </div>
          <div className={styles.right}>
            <HighLight
              text='آتلیه عکاسی'
              marked='آتلیه عکاسی'
            />
            <p>
              ما با الهام از جدیدترین خلاقیت، تصاویری با وضوح بالا از محصول خود
              را به شما پیشنهاد می کنیم تا برند خود را در بازار به نمایش
              بگذارید.
            </p>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>
            <img
              src='/images/services/hero/image-7.png'
              alt=''
            />
          </div>
          <div className={styles.right}>
            <HighLight
              text='استودیو طراحی'
              marked='استودیو طراحی'
            />
            <p>
              پس از انتخاب بهترین طرح و مواد بسته بندی، وقت آن است که با توانایی
              خود در طراحی ایده های منحصر به فرد و خلاقانه بدرخشیم.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
