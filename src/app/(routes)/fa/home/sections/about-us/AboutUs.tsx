import HighLight from "@/components/UI/HighLight/HighLight";
import styles from "./styles.module.scss";
import Button from "@/components/UI/Button/Button";

export default function AboutUs() {
  return (
    <section className={styles.aboutUs}>
      <div className={styles.right}>
        <div className={styles.col}>
          <div className={styles.first}>
            <div className={styles.info}>
              <h2>حسن غفورزاده نوبر</h2>
              <p>موسس شرکت درخشان پک</p>
            </div>
            <img src='/images/about-us/image-2.png' />
          </div>
          <div className={styles.second}>
            <div className={styles.info}>
              <h2>فرشته غفورزاده نوبر </h2>
              <p>مدیرعامل و مدیر عامل شرکت درخشان پک</p>
            </div>
            <img src='/images/about-us/image-1.png' />
          </div>
        </div>
        <div className={styles.third}>
          <div className={styles.info}>
            <h2>رحیم غفورزاده نوبر </h2>
            <p>مدیرعامل و مدیر عامل شرکت درخشان پک</p>
            <a href='ceo@dppack.com'>ceo@dppack.com</a>
          </div>
          <img src='/images/about-us/image-3.png' />
        </div>
      </div>
      <div className={styles.left}>
        <HighLight
          text={"درباره ی ما"}
          marked='درباره ی ما'
        />

        <p>
          ما یک شرکت چاپ افست با تجربه از سال 1972 هستیم و در بسته بندی لوکس
          تخصص داریم. این افتخار ماست که بسته بندی های سفارشی و منحصر به فرد را
          مطابق با نیاز شما به شما ارائه دهیم.
        </p>
        <Button
          title='مشاهده بیشتر'
          variant={"primary"}
          icon='ep:top-right'
        />
      </div>
    </section>
  );
}
