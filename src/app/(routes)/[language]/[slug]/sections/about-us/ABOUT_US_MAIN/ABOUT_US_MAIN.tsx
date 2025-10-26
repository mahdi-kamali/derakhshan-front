import { ISection } from "@/types/sections.types";
import { LanguagesENUM } from "@/types/Language/Language.types";
import Component from "./Component/Component";

interface IProps {
  section: Extract<ISection, { type: "ABOUT_US_MAIN" }>;
  language: LanguagesENUM;
}

export default function ABOUT_US_MAIN(props: IProps) {
  return <Component {...props} />;
}
