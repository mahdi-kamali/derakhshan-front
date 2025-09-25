import PageContainer from "@/components/containers/PageContainer/PageContainer";
import { GetPageAPI } from "@/services/Pages/pages.services";
import React from "react";
import HOME_HERO from "./sections/home/HOME_HERO/HOME_HERO";
import HOME_ABOUT_US from "./sections/home/HOME_ABOUT_US/HOME_ABOUT_US";
import HOME_ADVANCED_PACKAGING from "./sections/home/HOME_ADVANCED_PACKAGING/HOME_ADVANCED_PACKAGING";
import HOME_EXCLUSIVE_GIFT_BOXES from "./sections/home/HOME_EXCLUSIVE_GIFT_BOXES/HOME_EXCLUSIVE_GIFT_BOXES";
import ABOUT_US_MAIN from "./sections/about-us/ABOUT_US_MAIN/ABOUT_US_MAIN";
import CAREERS_HERO from "./sections/careers/CAREERS_HERO/CAREERS_HERO";

interface IProps {
  params: { language: "en" | "fa"; slug: string };
}

export default async function page(props: IProps) {
  const { params } = props;
  const { language, slug } = await params;

  const page = await GetPageAPI(`/${slug}`);

  const sections = page.sections;


  return (
    <PageContainer title={page.title}>
      {sections.map((section) => {
        const { type } = section;
        switch (type) {
          case "HOME_HERO":
            return (
              <HOME_HERO
                section={section}
                key={type}
                language={language}
              />
            );
          case "HOME_ABOUT_US":
            return (
              <HOME_ABOUT_US
                key={type}
                section={section}
                language={language}
              />
            );

          case "HOME_ADVANCED_PACKAGING":
            return (
              <HOME_ADVANCED_PACKAGING
                section={section}
                key={type}
                language={language}
              />
            );

          case "HOME_EXCLUSIVE_GIFT_BOXES":
            return (
              <HOME_EXCLUSIVE_GIFT_BOXES
                section={section}
                key={type}
                language={language}
              />
            );
          case "ABOUT_US_MAIN":
            return (
              <ABOUT_US_MAIN
                section={section}
                key={type}
                language={language}
              />
            );
          case "CAREERS_HERO":
            return (
              <CAREERS_HERO
                section={section}
                key={type}
                languages={language}
              />
            );
        }
      })}
    </PageContainer>
  );
}
