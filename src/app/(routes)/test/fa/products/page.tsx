import PageContainer from "@/components/containers/PageContainer/PageContainer";

import styles from "./styles.module.scss";
import Products from "./sections/Products/Products";

export default function page() {
  return (
    <PageContainer title='محصولات'>
      <div className={styles.page}>
        <Products />
        <div className={styles.background}></div>
      </div>
    </PageContainer>
  );
}
