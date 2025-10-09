"use client";
import PageContainer from "@/components/containers/PageContainer/PageContainer";
import Masonry from "react-masonry-css";
import styles from "./styles.module.scss";
import { GetProductByIdAPI } from "@/services/Products/products.services";
import { LanguagesENUM } from "@/types/Language/Language.types";
import { IProduct } from "@/types/products.types";
import { urls } from "@/common/urls";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { IResponse } from "@/utils/axios/axios";

const breakpointColumnsObj = {
  default: 2,
  1100: 2,
  700: 2,
  500: 2,
};

const bigItems = [1, 2];

interface IProps {
  language: LanguagesENUM;
  _id: IProduct["_id"];
}

export default function Page() {
  const { _id, language }: IProps = useParams() as any;

  const { data } = useQuery<IResponse<IProduct>>({
    queryFn: () => GetProductByIdAPI(_id),
    initialData: {
      data: {
        createdAt: "",
        description: "",
        gallery: [],
        image: undefined as any,
        title: "",
        updatedAt: "",
        _id: "",
        en_description: "",
        en_title: "",
      },
      message: "",
      status: 200,
    },
    queryKey: [GetProductByIdAPI.name],
  });

  const { data: product } = data;

  return (
    <PageContainer title={`${product.title}`}>
      <div className={styles.page}>
        <div className={styles.right}>
          <h1>
            {language === LanguagesENUM.FA ? product.title : product.en_title}
          </h1>
          <p>
            {language === LanguagesENUM.FA
              ? product.description
              : product.en_description}
          </p>
        </div>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={styles.masonryGrid}
          columnClassName={styles.masonryGridColumn}>
          {product.gallery.map((gal, i) => {
            return (
              <div
                className={`${styles.frame} ${
                  bigItems.includes(i) ? styles.big : styles.small
                }`}
                key={i}>
                <img src={urls.STORAGE(gal.path)} />
              </div>
            );
          })}
        </Masonry>
      </div>
    </PageContainer>
  );
}
