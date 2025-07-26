import PageContainer from "@/components/containers/PageContainer/PageContainer";
import Hero from "./sections/hero/Hero";
import OfficeMap from "./sections/officeMap/OfficeMap";

import styles from "./styles.module.scss";

export default function page() {
  return (
    <PageContainer title='تماس با ما'>
      <div className={styles.page}>
        <Hero />
        <OfficeMap />
      </div>
    </PageContainer>
  );
}
