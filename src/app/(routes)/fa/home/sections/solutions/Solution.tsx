import HighLight from "@/components/UI/HighLight/HighLight";
import styles from "./styles.module.scss";
import Button from "@/components/UI/Button/Button";
export default function Solution() {
  return (
    <section className={styles.solutions}>
      <div className={styles.right}>
        <img
          src='/images/solutions/image-1.png'
          alt=''
        />
      </div>
      <div className={styles.left}>
        <HighLight
          text='راه حل های بسته بندی پیشرفته'
          marked='بسته بندی'
        />
        <p>
          ما با تکنولوژی روز و امکانات مدرن، ظریف ترین و حرفه ای ترین بسته بندی
          را برای محصولات شما ارائه می دهیم. خدمات ما را کاوش کنید تا برند خود
          را ارتقا دهید.
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
