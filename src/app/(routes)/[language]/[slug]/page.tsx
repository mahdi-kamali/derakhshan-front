"use client";
import PageContainer from "@/components/containers/PageContainer/PageContainer";
import { GetPageAPI } from "@/services/Pages/pages.services";
import React from "react";
import HOME_HERO from "./sections/home/HOME_HERO/HOME_HERO";
import HOME_ABOUT_US from "./sections/home/HOME_ABOUT_US/HOME_ABOUT_US";
import HOME_ADVANCED_PACKAGING from "./sections/home/HOME_ADVANCED_PACKAGING/HOME_ADVANCED_PACKAGING";
import HOME_EXCLUSIVE_GIFT_BOXES from "./sections/home/HOME_EXCLUSIVE_GIFT_BOXES/HOME_EXCLUSIVE_GIFT_BOXES";
import ABOUT_US_MAIN from "./sections/about-us/ABOUT_US_MAIN/ABOUT_US_MAIN";
import CAREERS_HERO from "./sections/careers/CAREERS_HERO/CAREERS_HERO";
import { LanguagesENUM } from "@/types/Language/Language.types";
import CAREERS_JOBS from "./sections/careers/CAREERS_JOBS/CAREERS_JOBS";
import CONTACT_US from "./sections/contact-us/CONTACT_US";
import ORDER from "./sections/order/ORDER/ORDER";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import PRESS_SERVICE from "./sections/services/PRESS_SERVICE/PRESS_SERVICE";

export default function Page() {
  const params = useParams();
  const { language, slug }: { language: LanguagesENUM; slug: string } =
    params as any;

  const { data } = useQuery({
    queryFn: () => GetPageAPI(`/${slug}`),
    initialData: {
      data: {
        nav: {
          icon: "",
          show: true,
        },
        title_en: "",
        __v: 1,
        _id: "",
        createdAt: "",
        sections: [],
        slug: "",
        status: "active",
        title: "",
        updatedAt: "",
      },
      message: "",
      status: 200,
    },
    queryKey: [GetPageAPI.name],
  });

  const page = data.data;
  if (page === undefined) return;
  const { sections, title } = page;
  return (
    <PageContainer title={title}>
      {sections.map((section, index) => {
        const { type } = section;
        switch (type) {
          case "HOME_HERO":
            return (
              <HOME_HERO
                section={section}
                key={index}
                language={language.toUpperCase() as LanguagesENUM}
              />
            );

          case "HOME_ABOUT_US":
            return (
              <HOME_ABOUT_US
                key={index}
                section={section}
                language={language.toUpperCase() as LanguagesENUM}
              />
            );

          case "HOME_ADVANCED_PACKAGING":
            return (
              <HOME_ADVANCED_PACKAGING
                section={section}
                key={index}
                language={language.toUpperCase() as LanguagesENUM}
              />
            );

          case "HOME_EXCLUSIVE_GIFT_BOXES":
            return (
              <HOME_EXCLUSIVE_GIFT_BOXES
                section={section}
                key={index}
                language={language.toUpperCase() as LanguagesENUM}
              />
            );

          case "ABOUT_US_MAIN":
            return (
              <ABOUT_US_MAIN
                section={section}
                key={index}
                language={language.toUpperCase() as LanguagesENUM}
              />
            );

          case "CAREERS_HERO":
            return (
              <CAREERS_HERO
                section={section}
                key={index}
                languages={language.toUpperCase() as LanguagesENUM}
              />
            );

          case "CAREERS_JOBS":
            return <CAREERS_JOBS key={index} />;
          case "CONTACT_US":
            return (
              <CONTACT_US
                section={section}
                key={index}
                language={language.toUpperCase() as LanguagesENUM}
              />
            );

          case "ORDER":
            if (language === LanguagesENUM.FA) return <ORDER key={index} />;
            else return <></>;

          case "PREE_PRESS":
            return (
              <PRESS_SERVICE
                key={index}
                section={section}
                language={language.toUpperCase() as LanguagesENUM}
              />
            );

          case "PRESS":
            return (
              <PRESS_SERVICE
                section={section}
                key={index}
                language={language.toUpperCase() as LanguagesENUM}
              />
            );

          case "POST_PRESS":
            return (
              <PRESS_SERVICE
                key={index}
                section={section}
                language={language.toUpperCase() as LanguagesENUM}
              />
            );
        }
      })}
    </PageContainer>
  );
}
