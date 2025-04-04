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
      description:
        "جعبه هارد باکس لوکس با روکش لمینتی براق و طراحی سفارشی، مناسب برای بسته‌بندی هدایای ویژه و محصولات پریمیوم.",
    },
    {
      title: "جعبه مقوایی موج‌دار",
      image: "/images/products-second/image-2.png",
      description:
        "جعبه مقوایی مقاوم با طراحی موج‌دار، ایده‌آل برای بسته‌بندی کالاهای سنگین و ارسال محصولات پستی.",
    },
    {
      title: "جعبه تاشو سفارشی",
      image: "/images/products-first/image-3.png",
      description:
        "جعبه‌های تاشو با قابلیت چاپ اختصاصی، مناسب برای بسته‌بندی محصولات خرده‌فروشی و لوازم آرایشی.",
    },
  ];

  return (
    <PageContainer title='گالری'>
      <div className={styles.page}>
        <div className={styles.list}>
          {configs.map((product, index) => {
            return (
              <motion.div
                className={styles.product}
                key={product.image}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={styles.background}>
                  <img src='/images/gallery/background.png' alt='' />
                </div>
                <div className={styles.right}>
                  <img src={product.image} alt={product.title} />
                </div>
                <div className={styles.left}>
                  <div className={styles.title}>{product.title}</div>
                  <p>{product.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
        <motion.div
          className={styles.more}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className={styles.count}>
            <span>12</span>
            <span>محصول دیگیر</span>
          </div>
          <img className={styles.arrow} src='/images/gallery/arrow.svg' alt='' />
          <Button
            icon='ep:top-right'
            title='مشاهده محصولات'
            variant='primary'
            onClick={() => {}}
          />
        </motion.div>
      </div>
    </PageContainer>
  );
}
