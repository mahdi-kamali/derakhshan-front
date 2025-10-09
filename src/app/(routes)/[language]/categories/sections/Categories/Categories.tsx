"use client";
import { motion } from "framer-motion";
import Button from "@/components/UI/Button/Button";
import styles from "./styles.module.scss";
import { GetProductsAPI } from "@/services/Products/products.services";
import { useQuery } from "@tanstack/react-query";
import { urls } from "@/common/urls";
import useRedirect from "@/hooks/useRedirect";
import { useParams } from "next/navigation";
import { LanguagesENUM } from "@/types/Language/Language.types";
import { GetCategoiresAPI } from "@/services/Categories/categories.services";

export default function Categories() {
  const { language }: { language: LanguagesENUM } = useParams();

  const { GoProducts, GoCategory } = useRedirect();

  const { data: categories } = useQuery({
    queryFn: GetCategoiresAPI,
    initialData: {
      data: [],
      message: "",
      status: 200,
    },
    queryKey: [GetCategoiresAPI.name],
  });

  return (
    <section>
      <div className={styles.list}>
        {categories.data.map((cat, index) => {
          return (
            <motion.div
              className={styles.category}
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: index * 0.3 }} // Staggered delay for each product
              viewport={{ once: true }} // Animates once when it comes into view
            >
              <div className={styles.content}>
                <img
                  src={urls.STORAGE(cat.image.path)}
                  alt={cat.title}
                />
                <h2>
                  {language === LanguagesENUM.FA ? cat.title : cat.en_title}
                </h2>
                <Button
                  icon='ep:top-right'
                  title={
                    language === LanguagesENUM.EN
                      ? "View Products"
                      : "مشاهده محصولات"
                  }
                  variant='primary'
                  onClick={() => {
                    GoCategory(language as LanguagesENUM).single(cat._id);
                  }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
