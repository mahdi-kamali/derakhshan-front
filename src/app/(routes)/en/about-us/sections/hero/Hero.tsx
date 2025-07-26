"use client";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import HighLight from "@/components/UI/HighLight/HighLight";
import Button from "@/components/UI/Button/Button";

export default function Hero() {
  const configs = {
    background: "/images/about-us/background.png",
    company: {
      image: "/images/about-us/hero.png",
    },
    agents: [
      {
        name: "حسن غفورزاده نوبر",
        image: "/images/about-us/image-2.png",
        roles: ["بنیان‌گذار شرکت درخشان پاک"],
      },
      {
        name: "رحیم غفورزاده نوبر",
        image: "/images/about-us/image-3.png",
        roles: ["مدیرعامل شرکت درخشان پاک"],
        email: "ceo@dppack.com",
      },
      {
        name: "فرشته نوبر",
        image: "/images/about-us/image-1.png",
        roles: ["قائم مقام مدیر عامل درخشان پاک"],
      },
    ],
    stories: [
      {
        title: {
          text: "1945 - تأسیس شرکت",
          marked: "تأسیس",
        },
        image: "/images/about-us/stories/image-1.png",
        description:
          "در سال 1945، پدربزرگ ما، حسن غفورزاده نوبر، پایه های شرکت بسته بندی مدرن و کاملاً مجهز ما را در تبریز گذاشت. ما با لذت و افتخار به تاریخ 71 ساله شرکت خود نگاه می کنیم. به سفری در زمان خوش آمدید که نشان می دهد با اراده قوی و قدرت نوآوری می توان به چه چیزی دست یافت.",
      },
      {
        title: {
          text: "1979 - نسل دوم",
          marked: "دوم",
        },
        image: "/images/about-us/stories/image-2.png",
        description:
          "رحیم غفورزاده نوبر به عنوان یک شرکت خانوادگی در نسل دوم خود درک کرد که حفظ کیفیت در عین برآورده کردن خواسته‌های مشتری چقدر مهم است. او در سال 1979 شرکت را به 12000 متر مربع گسترش داد.",
      },
      {
        title: {
          text: "2014 - جهانی و دیجیتالی شدن",
          marked: "دیجیتالی",
        },
        image: "/images/about-us/stories/image-3.png",
        description:
          "جهانی شدن و دیجیتالی شدن، جهان را کوچک‌تر و قلمرو کسب و کار درخشان پک را گسترش می‌دهد. فرشته غفورزاده نوبر، نسل سوم خانواده، با شروع تحصیلات دانشگاهی از دانشگاه‌های آلمان و ایران به این شرکت پیوست که این امر برای مشتریان ما سودمند خواهد بود.",
      },
    ],
  };

  return (
    <section className={styles.hero}>
      {/* Background Image */}
      <motion.div
        className={styles.background}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={configs.background} alt="" />
      </motion.div>
      {/* Company Image - Fades in first */}
      <motion.div
        className={styles.company}
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 2.5, delay: 0, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <img src={configs.company.image} alt="" />
      </motion.div>
      {/* Agents List */}
      <motion.div
        className={styles.agents}
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 5,
          delay: 0,
        }}
      >
        <motion.div className={styles.list}>
          {configs.agents.map((agent, index) => (
            <motion.div
              className={styles.agent}
              key={agent.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index + 0.5, ease: "easeOut" }} // Ensures agents appear one by one after company fades in
              viewport={{ once: true }}
            >
              <div className={styles.left}>
                <img src={agent.image} alt="" />
              </div>
              <div className={styles.right}>
                <div className={styles.name}>{agent.name}</div>
                <div className={styles.roles}>
                  {agent.roles?.map((role) => (
                    <span key={role}>{role}</span>
                  ))}
                </div>
                <div className={styles.email}>{agent.email}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Info Section */}
        <motion.div
          className={styles.info}
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <HighLight text="فهرست نمایندگی" marked="فهرست" />
          <p>
            ما یک شرکت چاپ افست با تجربه از سال 1972 هستیم و در بسته بندی لوکس
            تخصص داریم. این افتخار ماست که بسته بندی های سفارشی و منحصر به فرد
            را مطابق با نیاز شما به شما ارائه دهیم.
          </p>
        </motion.div>
      </motion.div>
      <section className={styles.stories}>
        {configs.stories.map((story, index) => (
          <motion.div
            className={styles.item}
            key={story.image}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className={styles.right}>
              <img src={story.image} alt="" />
            </div>
            <div className={styles.left}>
              <HighLight text={story.title.text} marked={story.title.marked} />
              <p>{story.description}</p>
              <Button
                title="ادامه مطلب"
                icon={"ep:top-right"}
                variant="primary"
              />
            </div>
          </motion.div>
        ))}
      </section>
    </section>
  );
}
