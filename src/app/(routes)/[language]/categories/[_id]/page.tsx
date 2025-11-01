"use client";
import PageContainer from "@/components/containers/PageContainer/PageContainer";

import styles from "./styles.module.scss";
import { urls } from "@/common/urls";
import { GetCategoiryAPI } from "@/services/Categories/categories.services";
import useRedirect from "@/hooks/useRedirect";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { ICategory } from "@/types/category.types";
import { LanguagesENUM } from "@/types/Language/Language.types";
import ImageProduct from "./ImageProduct/ImageProduct";
import Description from "@/components/UI/Section/Description/Description";
import HighLight from "@/components/UI/HighLight/HighLight";

interface IParams {
  _id: ICategory["_id"];
  language: LanguagesENUM;
}

export default function Page() {
  const { _id, language }: IParams = useParams() as any;

  const { data: category } = useQuery({
    queryFn: () => GetCategoiryAPI(_id as string),
    initialData: {
      __v: 0,
      _id: "",
      createdAt: "",
      description: "",
      image: undefined as any,
      products: [],
      title: "",
      updatedAt: "",
      en_description: "",
      en_title: "",
    } as ICategory,
    queryKey: [GetCategoiryAPI.name],
  });

  const { GoProducts } = useRedirect();

  return (
    <PageContainer title={category.title}>
      <div className={styles.page}>
        <div className={styles.right}>
          <HighLight
            marked={
              language === LanguagesENUM.FA ? category.title : category.en_title
            }
            text={
              language === LanguagesENUM.FA ? category.title : category.en_title
            }
          />
          <Description>
            {language === LanguagesENUM.FA
              ? category.description
              : category.en_description}
          </Description>
        </div>
        <div className={styles.left}>
          {category.products.map((pro) => {
            return (
              <ImageProduct
                key={pro._id}
                image={urls.STORAGE(pro.image.path)}
                onClick={() => {
                  GoProducts(language as LanguagesENUM).single(pro._id);
                }}
              />
            );
          })}
        </div>
      </div>
    </PageContainer>
  );
}
