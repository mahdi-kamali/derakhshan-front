import PageContainer from "@/components/containers/PageContainer/PageContainer";
import React from "react";
import Hero from "./sections/hero/Hero";
import Press from "./sections/press/Press";
import PostPress from "./sections/post-press/PostPress";

export default function page() {
  return (
    <PageContainer title='سرویس ها'>
      <Hero />
      <Press/>
      <PostPress/>
    </PageContainer>
  );
}
