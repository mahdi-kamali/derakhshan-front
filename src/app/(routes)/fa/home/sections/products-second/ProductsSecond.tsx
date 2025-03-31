import HighLight from "@/components/UI/HighLight/HighLight";
import styles from "./styles.module.scss";
import Button from "@/components/UI/Button/Button";
export default function ProductsSecond() {
  return (
    <section className={styles.ProductsFirst}>
      <div className={styles.right}>
        <div className={styles.first}>
          <img
            src='/images/products-second/image-3.png'
            alt=''
          />
        </div>

        <div className={styles.second}>
          <img
            src='/images/products-second/image-1.png'
            alt=''
          />
        </div>

        <div className={styles.third}>
          <img
            src='/images/products-second/image-2.png'
            alt=''
          />
        </div>
      </div>
      <div className={styles.left}>
        <HighLight
          text='جعبه های کادویی انحصاری'
          marked='کادویی'
        />
        <p>
          تخصص ما ساخت جعبه های هدیه لوکس و منحصر به فرد با استفاده از مواد
          مختلف است که برای پاسخگویی به مشتریانی با سلیقه های ظریف طراحی شده
          است.
        </p>
        <div className={styles.actions}>
          <Button
            title='مشاهده بیشتر'
            variant={"primary"}
            icon='ep:top-right'
          />
        </div>
      </div>
    </section>
  );
}
