import PageContainer from "@/components/containers/PageContainer/PageContainer";

import styles from "./styles.module.scss";
import Hero from "./sections/hero/Hero";

export default function AboutUs() {
  return (
    <PageContainer title='درباره ی ما'>
      <div className={styles.page}>
        <Hero/>
      </div>
    </PageContainer>
  );
}
