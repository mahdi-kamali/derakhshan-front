import PageContainer from "@/components/containers/PageContainer/PageContainer";
import Hero from "./sections/hero/Hero";

import styles from "./styles.module.scss";

export default function page() {
  return (
    <PageContainer title='تماس با ما'>
      <div className={styles.page}>
        <Hero />
      </div>
    </PageContainer>
  );
}
