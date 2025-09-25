import PageContainer from "@/components/containers/PageContainer/PageContainer";

import styles from "./styles.module.scss";
import ABOUT_US_MAIN from "./sections/ABOUT_US_MAIN/ABOUT_US_MAIN";
import { GetPageAPI } from "@/services/Pages/pages.services";
import { ISection } from "@/types/sections.types";




export default async function AboutUs() {
  const page = await GetPageAPI("/about-us");

  return (
    <PageContainer title='ABOUT US'>
      <div className={styles.page}>
        {page.sections.map((section) => {
          const { type } = section;
          switch (type) {
            case "ABOUT_US_MAIN":
              return <ABOUT_US_MAIN section={section} key={type} />;
          }
        })}
      </div>
    </PageContainer>
  );
}
