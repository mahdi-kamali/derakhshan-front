import PageContainer from "@/components/containers/PageContainer/PageContainer";
import React from "react";
import Hero from "./sections/hero/Hero";

export default function page() {
  return (
    <PageContainer title='سرویس ها'>
      <Hero />
    </PageContainer>
  );
}
