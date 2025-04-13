import HighLight from "@/components/UI/HighLight/HighLight";
import styles from "./styles.module.scss";

export default function Hero() {
  const configs = {
    hero: {
      background: "/images/careers/background.png",
      title: {
        text: `فرصت‌های شغلی ما، 
جایی برای رشد و خلاقیت شما.`,
        marked: "رشد و خلاقیت",
      },
      description:
        "شرکت درخشان به دنبال افرادی خلاق، باانگیزه و متعهد هستیم که به ما در ساخت آینده‌ای بهتر کمک کنند. اگر به دنبال محیطی پویا، دوستانه و با فرصت‌های یادگیری و پیشرفت هستید، جای شما در تیم ما خالی است! فرصت‌های شغلی ما را بررسی کنید و به جمع ما بپیوندید.",
    },
  };

  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <img
          src={configs.hero.background}
          alt=''
        />
      </div>

      <div className={styles.info}>
        <HighLight
          text={configs.hero.title.text}
          marked={configs.hero.title.marked}
        />
        <p>{configs.hero.description}</p>
      </div>
    </section>
  );
}
