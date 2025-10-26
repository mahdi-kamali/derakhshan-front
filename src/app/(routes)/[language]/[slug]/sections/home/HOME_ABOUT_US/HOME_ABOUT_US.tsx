import { ISection } from "@/types/sections.types";
import { LanguagesENUM } from "@/types/Language/Language.types";
import Component from "./Component/Component";

interface IProps {
  section: Extract<ISection, { type: "HOME_ABOUT_US" }>;
  language: LanguagesENUM;
}

export default function HOME_ABOUT_US(props: IProps) {
  return <Component {...props} />;
}
