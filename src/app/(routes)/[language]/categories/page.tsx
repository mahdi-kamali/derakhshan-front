import PageContainer from "@/components/containers/PageContainer/PageContainer";
import styles from "./styles.module.scss";
import Categories from "./sections/Categories/Categories";

export default function Page() {
  return (
    <PageContainer title='محصولات'>
      <div className={styles.page}>
        <Categories />
        <div className={styles.background}></div>
      </div>
    </PageContainer>
  );
}
