import SubProductPage from "./components/SubProductPage";
import { configs } from "@/data/products";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; subslug: string }>;
}) {
  const { slug, subslug } = await params;
  const product = configs.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return <SubProductPage product={product} subslug={subslug} />;
}
