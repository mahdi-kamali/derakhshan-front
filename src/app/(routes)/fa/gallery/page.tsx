"use client";
import { motion } from "framer-motion";
import PageContainer from "@/components/containers/PageContainer/PageContainer";
import Button from "@/components/UI/Button/Button";
import styles from "./styles.module.scss";

export default function page() {
  const configs = [
    {
      title: "جعبه هارد باکس لوکس",
      image: "/images/products-first/image-1.png",
      class: styles.item1,
      description:
        "جعبه هارد باکس لوکس با روکش لمینتی براق و طراحی سفارشی، مناسب برای بسته‌بندی هدایای ویژه و محصولات پریمیوم.",
    },
    {
      title: "جعبه مقوایی موج‌دار",
      image: "/images/products-second/image-2.png",
      class: styles.item2,
      description:
        "جعبه مقوایی مقاوم با طراحی موج‌دار، ایده‌آل برای بسته‌بندی کالاهای سنگین و ارسال محصولات پستی.",
    },
    {
      title: "جعبه تاشو سفارشی",
      image: "/images/products-first/image-3.png",
      class: styles.item3,
      description:
        "جعبه‌های تاشو با قابلیت چاپ اختصاصی، مناسب برای بسته‌بندی محصولات خرده‌فروشی و لوازم آرایشی.",
    },
  ];

  return (
    <PageContainer title="گالری">
      <div className={styles.page}>
        <div className={styles.right}>
          <h1>جعبه هارد باکس لوکس</h1>
        </div>
        <div className={styles.left}>
          {configs.map((item, index) => (
            <img src={item.image} className={item.class} key={index}></img>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
