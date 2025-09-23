import PageContainer from "@/components/containers/PageContainer/PageContainer";
import HOME_HERO from "./sections/HOME_HERO/HOME_HERO";
import HOME_ABOUT_US from "./sections/HOME_ABOUT_US/HOME_ABOUT_US";
import HOME_ADVANCED_PACKAGING from "./sections/HOME_ADVANCED_PACKAGING/HOME_ADVANCED_PACKAGING";
import ProductsFirst from "./sections/HOME_EXCLUSIVE_GIFT_BOXES/HOME_EXCLUSIVE_GIFT_BOXES";
import { GetPageAPI, GetPagesAPI } from "@/services/Pages/pages.services";

export default async function page() {
  const page = await GetPageAPI("/home");

  return (
    <PageContainer
      title='HOME'
      className='HomePage'>
      {page.sections.map((section) => {
        const { type } = section;
        switch (type) {
          case "HOME_HERO":
            return (
              <HOME_HERO
                section={section}
                key={type}
              />
            );
          case "HOME_ABOUT_US":
            return (
              <HOME_ABOUT_US
                key={type}
                section={section}
              />
            );

          case "HOME_ADVANCED_PACKAGING":
            return (
              <HOME_ADVANCED_PACKAGING
                section={section}
                key={type}
              />
            );

          case "HOME_EXCLUSIVE_GIFT_BOXES":
            return (
              <ProductsFirst
                section={section}
                key={type}
              />
            );
        }
      })}
      {/* <ProductsFirst /> */}
      {/* <ProductsSecond /> */}
    </PageContainer>
  );
}
