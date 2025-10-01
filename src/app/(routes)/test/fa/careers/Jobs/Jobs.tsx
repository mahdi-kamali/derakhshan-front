"use client";
import styles from "./styles.module.scss";
import Job, { IJob } from "./components/Job/Job";
import { motion } from "framer-motion";
import Button from "@/components/UI/Button/Button";
import { useRouter } from "next/navigation";

export default function Jobs() {
  const router = useRouter();
  const configs: IJob[] = [
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
      {configs.length > 0 &&
        configs.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Job job={job} isLast={index == 0 ? true : false} />
          </motion.div>
        ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
        className={styles.bottom}
      >
        <p> برای ارسال فرم برای استخدام به این صفحه مراجعه فرمایید</p>
        <Button
          title="ارسال فرم"
          variant="primary"
          icon="ep:top-right"
          onClick={() => router.push("/FA/job-form")}
        />
      </motion.div>
    </section>
  );
}
