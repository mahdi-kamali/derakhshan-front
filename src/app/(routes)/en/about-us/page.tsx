import PageContainer from "@/components/containers/PageContainer/PageContainer";

import styles from "./styles.module.scss";
import Hero from "./sections/hero/Hero";

export default function AboutUs() {
  return (
    <PageContainer title='ABOUT US'>
      <div className={styles.page}>
        <Hero/>
      </div>
    </PageContainer>
  );
}
