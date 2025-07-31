import PageContainer from "@/components/containers/PageContainer/PageContainer";
import React from "react";

import styles from "./styles.module.scss";

import Hero from "./Hero/Hero";
import Jobs from "./Jobs/Jobs";

export default function page() {
  return (
    <PageContainer title="CAREERS">
      <div className={styles.page}>
        <Hero />
        <Jobs />
      </div>
    </PageContainer>
  );
}
