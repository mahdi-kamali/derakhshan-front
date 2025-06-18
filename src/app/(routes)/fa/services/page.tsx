import PageContainer from "@/components/containers/PageContainer/PageContainer";
import React from "react";
import Hero from "./sections/hero/Hero";
import Press from "./sections/press/Press";
import PostPress from "./sections/post-press/PostPress";

import styles from "./styles.module.scss";

export default function page() {
  return (
    <PageContainer title="سرویس ها">
      <div className={styles.page}>
        <Hero />
        <Press />
        <PostPress />
      </div>
    </PageContainer>
  );
}
