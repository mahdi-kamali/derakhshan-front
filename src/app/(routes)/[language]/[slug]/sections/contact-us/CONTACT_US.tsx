import PageContainer from "@/components/containers/PageContainer/PageContainer";
import { LanguagesENUM } from "@/types/Language/Language.types";
import { ISection } from "@/types/sections.types";
import React from "react";
import Hero from "./Hero/Hero";
import OfficeMap from "./Map/Map";
import styles from "./styles.module.scss";

interface IProps {
  section: Extract<ISection, { type: "CONTACT_US" }>;
  language: LanguagesENUM;
}

export default function CONTACT_US(props: IProps) {
  return (
    <PageContainer title='تماس با ما'>
      <div className={styles.page}>
        <Hero {...props} />
        <OfficeMap />
      </div>
    </PageContainer>
  );
}
