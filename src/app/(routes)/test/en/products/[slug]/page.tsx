import { configs } from "../../../../../data/products";
import PageContainer from "@/components/containers/PageContainer/PageContainer";
import { notFound } from "next/navigation";

import ImageProduct from "./components/ImageProduct";
import styles from "./styles.module.scss";

export default async function page({
  params,
}: {
  params: Promise<{ slug: string; subslug: string }>;
}) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const product = configs.find((p) => p.slug === slug);

  if (!product) {
    notFound();
    return null;
  }

  return (
    <PageContainer title={product.title}>
      <div className={styles.page}>
        <div className={styles.right}>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
        </div>
        <div className={styles.left}>
          {Array.from({ length: 6 }).map((_, i) => (
            <ImageProduct
              key={i}
              image={product.image}
              alt={product.title}
              className={styles[product.class as keyof typeof styles]}
              routePath={`/fa/products/${slug}/sub-${i + 1}`}
            />
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
