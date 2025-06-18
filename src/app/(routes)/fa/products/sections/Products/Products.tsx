"use client";
import { motion } from "framer-motion";
import Button from "@/components/UI/Button/Button";
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";

export default function Products() {

  const router = useRouter();
  const configs = [
    {
      title: "جعبه هارد باکس لوکس",
      image: "/images/products-first/image-1.png",
    },
    {
      title: "جعبه مقوایی موج‌دار",
      image: "/images/products-first/image-2.png",
    },
    {
      title: "جعبه تاشو سفارشی",
      image: "/images/products-first/image-3.png",
    },
    {
      title: "جعبه هارد باکس لوکس",
      image: "/images/products-first/image-1.png",
    },
    {
      title: "جعبه مقوایی موج‌دار",
      image: "/images/products-first/image-2.png",
    },
    {
      title: "جعبه تاشو سفارشی",
      image: "/images/products-first/image-3.png",
    },
  ];

  return (
    <section>
      <div className={styles.list}>
        {configs.map((product, index) => {
          return (
            <motion.div
              className={styles.product}
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: index * 0.3 }} // Staggered delay for each product
              viewport={{ once: true }} // Animates once when it comes into view
            >
              <img
                src={product.image}
                alt={product.title}
              />
              <h2>{product.title}</h2>
              <Button
                icon='ep:top-right'
                title='مشاهده محصول'
                variant='primary'
                onClick={() => router.replace("/fa/gallery") }
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
