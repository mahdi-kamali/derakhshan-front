import HighLight from "@/components/UI/HighLight/HighLight";
import styles from "./styles.module.scss";
import Button from "@/components/UI/Button/Button";
export default function ProductsFirst() {
  return (
    <section className={styles.ProductsFirst}>
      <div className={styles.right}>
        <div className={styles.first}>
          <img
            src='/images/products-first/image-1.png'
            alt=''
          />
        </div>

        <div className={styles.second}>
          <img
            src='/images/products-first/image-2.png'
            alt=''
          />
        </div>

        <div className={styles.third}>
          <img
            src='/images/products-first/image-3.png'
            alt=''
          />
        </div>
      </div>
      <div className={styles.left}>
        <HighLight
          text='جعبه های متالایز'
          marked='متالایز'
        />
        <p>
          با طیف وسیعی از فیلم‌های متالایز، سایه‌ها و رنگ‌های مختلف، می‌توانید
          بسته‌بندی متالایز خیره‌کننده داشته باشید که برای افزایش جذابیت برند
          شما طراحی شده است.
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
