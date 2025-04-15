"use client";
import styles from "./styles.module.scss";
import Job from "./components/Job/Job";
import { motion } from "framer-motion";
import Button from "@/components/UI/Button/Button";

export default function Jobs() {
  const configs = [
    {
      type: "special",
      title: {
        text: "کارشناس فروش خدمات چاپ",
        marked: "فروش خدمات چاپ",
      },
      requirements: [
        "آشنایی با صنعت چاپ و محصولات تکمیلی چاپ",
        "توانایی برقراری ارتباط موثر با مشتریان",
        "مهارت در مذاکره و ارائه خدمات",
        "حداقل 2 سال سابقه کار مرتبط",
      ],
      description:
        "ما به دنبال فردی هستیم که با آگاهی از خدمات چاپ و تکمیلی (مانند لمینت، طلاکوب، برجسته‌سازی و غیره) بتواند به مشتریان در انتخاب بهترین راهکارها کمک کند و فروش خدمات را افزایش دهد.",
      apply: "ارسال فرم استخدامی",
      image: "/images/careers/image-1.png",
    },
    {
      type: "normal",
      title: {
        text: "طراح گرافیک متخصص در صنعت چاپ",
        marked: "طراح گرافیک",
      },
      requirements: [
        "تسلط به نرم‌افزارهای طراحی مانند Adobe Illustrator و CorelDRAW",
        "آشنایی با اصول طراحی برای چاپ (رزولوشن، رنگ‌ها و ابعاد)",
        "خلاقیت در طراحی بسته‌بندی و محصولات چاپی",
        "حداقل 2 سال تجربه طراحی مرتبط",
      ],
      description:
        "ما به یک طراح گرافیک خلاق نیاز داریم که بتواند طراحی‌های حرفه‌ای و مناسب برای چاپ ایجاد کند، از جمله بسته‌بندی، بروشور، و محصولات خاص چاپی.",
      apply: "ارسال فرم استخدامی",
      image: "/images/careers/image-2.png",
    },
    {
      type: "normal",
      title: {
        text: "طراح گرافیک متخصص در صنعت چاپ",
        marked: "طراح گرافیک",
      },
      requirements: [
        "تسلط به نرم‌افزارهای طراحی مانند Adobe Illustrator و CorelDRAW",
        "آشنایی با اصول طراحی برای چاپ (رزولوشن، رنگ‌ها و ابعاد)",
        "خلاقیت در طراحی بسته‌بندی و محصولات چاپی",
        "حداقل 2 سال تجربه طراحی مرتبط",
      ],
      description:
        "ما به یک طراح گرافیک خلاق نیاز داریم که بتواند طراحی‌های حرفه‌ای و مناسب برای چاپ ایجاد کند، از جمله بسته‌بندی، بروشور، و محصولات خاص چاپی.",
      apply: "ارسال فرم استخدامی",
      image: "/images/careers/image-3.png",
    },
  ];

  return (
    <section className={styles.careers}>
      {configs.map((job, index) => (
        <motion.div
          key={job.image}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: index * 0.2 }}
          viewport={{ once: true }}>
          <Job job={job} />
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}>
        <Button
          title='مشاهده بیشتر'
          variant='primary'
          icon='ep:top-right'
        />
      </motion.div>
    </section>
  );
}
