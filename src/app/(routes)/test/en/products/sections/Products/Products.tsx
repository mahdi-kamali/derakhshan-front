"use client";
import { motion } from "framer-motion";
import Button from "@/components/UI/Button/Button";
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";

export default function Products() {
  const router = useRouter();
  const configs = [
    {
      title: "PRINTING AND HOT FOIL STAMPING OF PVC AND PET MATERIALS",
      slug: "printing-and-hot-foil-stamping-of-pvc-and-pet-materials",
      image: "/images/products-first/image-1.png",
    },
    {
      title: "GIFT BOXES WITH LID AND BASE",
      slug: "gift-boxes-with-lid-and-base",
      image: "/images/products-first/image-1.png",
    },
    {
      title: "FLIP LID GIFT BOXES",
      slug: "flip-lid-gift-boxes",
      image: "/images/products-first/image-2.png",
    },
    {
      title: "LUXURY HARD BOXES",
      slug: "luxury-hard-boxes",
      image: "/images/products-first/image-3.png",
    },
    {
      title: "PACKAGING FOR AUTOMATIC MACHINERY( CHOCOLATE BAR-CHEWING GUM )",
      slug: "packaging-for-automatic-machinery-chocolate-bar-packaging-chewing-gum",
      image: "/images/products-first/image-1.png",
    },
    {
      title: "COLLAPSABLE-CRASH LUCK BOTTOM-WINDOW PATCHED BOXES",
      slug: "collapsable-and-window-patched-boxes",
      image: "/images/products-first/image-2.png",
    },
    {
      title: "CUSTOMIZED STANDS",
      slug: "customized-stands",
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
              <div className={styles.content}>
                <img src={product.image} alt={product.title} />
                <h2>{product.title}</h2>
                <Button
                  icon="ep:top-right"
                  title="VIEW PRODUCT"
                  variant="primary"
                  onClick={() => router.push("/FA/products/" + product.slug)}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
