import { Icon } from "@iconify/react/dist/iconify.js";
import styles from "./styles.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.logo}>
        <img
          src='/images/logo.png'
          alt=''
        />
      </div>
      <div className={styles.slug}>
        <img
          src='/images/slug.png'
          alt=''
        />
        <p>«خواسته شما اولیت ماست.</p>
      </div>

      <p className={styles.description}>
        با بیش از 72 سال تجربه درخشان در صنعت چاپ و بسته بندی.
      </p>

      <div className={styles.contact}>
        <div className={styles.row}>
          <div className={styles.right}>
            <span>+98 4136373751-2</span>
          </div>
          <div className={styles.left}>
            <span>تلفن:</span>
            <Icon icon='gg:phone' />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.right}>
            <span>+98 4136373753</span>
          </div>
          <div className={styles.left}>
            <span>فکس:</span>
            <Icon icon='mingcute:fax-fill' />
          </div>
        </div>
      </div>
    </section>
  );
}
