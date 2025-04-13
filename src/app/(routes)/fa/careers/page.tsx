import PageContainer from "@/components/containers/PageContainer/PageContainer";
import React from "react";
import Hero from "./Hero/Hero";

import styles from "./styles.module.scss";
import Jobs from "./Jobs/Jobs";

export default function page() {
  return (
    <PageContainer title='فرصت های شغلی'>
      <div className={styles.page}>
        <Hero />
        <Jobs />
      </div>
    </PageContainer>
  );
}
