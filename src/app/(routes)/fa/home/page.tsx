import PageContainer from "@/components/containers/PageContainer/PageContainer";
import React from "react";
import Hero from "./sections/hero/Hero";
import AboutUs from "./sections/about-us/AboutUs";
import Solution from "./sections/solutions/Solution";
import ProductsFirst from "./sections/products-first/ProductsFirst";
import ProductsSecond from "./sections/products-second/ProductsSecond";

export default function page() {
  return (
    <PageContainer title='صفحه اصلی'>
      <Hero />
      <AboutUs />
      <Solution />
      <ProductsFirst />
      <ProductsSecond/>
    </PageContainer>
  );
}
