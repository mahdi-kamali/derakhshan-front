"use client";

import PageContainer from "@/components/containers/PageContainer/PageContainer";
import Masonry from "react-masonry-css";
import styles from "./styles.module.scss";

const breakpointColumnsObj = {
  default: 2,
  1100: 2,
  700: 2,
  500: 2,
};

const bigItems = [1, 2];

const masonryOptions = {
  transitionDuration: 0,
  gutter: 20,
};

type Props = {
  product: {
    slug: string;
    title: string;
    description: string;
    image: string;
    class?: string;
  };
  subslug: string;
};

export default function SubProductPage({ product, subslug }: Props) {
  return (
    <PageContainer title={`${product.title} - ${subslug}`}>
      <div className={styles.page}>
        <div className={styles.right}>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
        </div>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={styles.masonryGrid}
          columnClassName={styles.masonryGridColumn}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              className={`${styles.frame} ${
                styles[product.class as keyof typeof styles]
              } ${bigItems.includes(i) ? styles.big : styles.small}`}
              key={i}
            >
              <img src={product.image} alt={product.title} />
            </div>
          ))}
        </Masonry>
      </div>
    </PageContainer>
  );
}
