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
          text: "نسل اول: تاسیس شرکت",
          marked: "نسل اول: تاسیس شرکت",
        },
        image: "/images/about-us/stories/image-1.png",
        description:
          "جناب آقای حسن غفورزاده نوبر به عنوان موسس و بنیان گذار برند چاپ درخشان، در سال ۱۳۲۴پایه های چاپخانه و بسته بندی کاملا مجهز را در تبریز بنانهادند و با تلاش مستمر خود توانستند به یکی از موفق ترین های این صنعت تبدیل شده و نامی آشنا و محبوب در سطح شهر تبریز و کشور شناخته شوند. ما با افتخار به قدمت ۸۰ سال خویش نگاه میکنیم.",
      },
      {
        title: {
          text: "نسل دوم",
          marked: "دوم",
        },
        image: "/images/about-us/stories/image-2.png",
        description:
          "جناب آقای رحیم غفورزاده نوبر در سال ۱۳۵۸، با اتمام تحصیلات خود در رشته مدیریت بازرگانی از دانشگاه تهران و به پشتوانه تجربه چندین سال همکاری در این صنعت، با طرزفکری خلاقانه و با علاقه و پشتکاری که داشتند، تصمیم به ادامه مسیر شغل پدری گرفتند. با توجه به درک ایشان از اهمیت و جایگاه بالای چاپ و بسته بندی و با توجه به صنعتی تر شدن ایران و خصوصا تبریز به عنوان یکی از قطب های اصلی صنعتی کشور و همچنین پایتخت شیرینی و شکلات، شروع به وارد کردن ماشین آلات چاپ و بسته بندی اتوماتیک و پیشرفته اروپایی نمودند تا بتوانند بهترین کیفیت و در عین حال در سریعترین زمان، تحویل سفارشات به مشتریان را انجام دهند.کیفیت محصول نهایی و مشاوره دقیق و علاوه بر این ارائه منحصربفردترین بسته بندی های روز دنیا، باعث شد این شرکت به عنوان برترین در زمینه چاپ و بسته بندی شناخته شود.در همین راستا بعد از چندین سال مطالعه، ایشان شروع به گسترش شرکت با زیربنای ۱۲۰۰۰ مترمربع و واردات ماشین آلات جدید کردند. در همین زمان دستگاه های پیشرفته و اتوماتیک جعبه های هاردباکس بصورت گسترده و کامل وارد شرکت شد.",
      },
      {
        title: {
          text: "نسل سوم",
          marked: "نسل سوم",
        },
        image: "/images/about-us/stories/image-3.png",
        description:
          "خانم فرشته غفورزاده نوبر با اتمام تحصیلات خود در رشته مهندسی صنایع در مقطع کارشناسی و مدیریت بازرگانی در مقطع کارشناسی ارشد از دانشگاه تبریز ، جهت تداوم فعالیت های برند چاپ درخشان ضمن بهره گیری از اساتید مجرب صنعت چاپ در کشور آلمان و اخذ مدرک آکادمیک از دانشگاه های معتبر این صنعت، با پیوستن به شرکت از سال ۱۳۹۳ در کنار پدر در جهت پیشبرد اهداف شرکت ، فعالیت خود را آغاز کرد.",
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
