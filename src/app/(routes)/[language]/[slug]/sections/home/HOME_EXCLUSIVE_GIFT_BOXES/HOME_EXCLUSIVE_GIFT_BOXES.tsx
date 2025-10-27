import { ISection } from "@/types/sections.types";
import { LanguagesENUM } from "@/types/Language/Language.types";
import Component from "./Component/Component";

interface IProps {
  section: Extract<ISection, { type: "HOME_EXCLUSIVE_GIFT_BOXES" }>;
  language: LanguagesENUM;
}

export default function HOME_EXCLUSIVE_GIFT_BOXES(props: IProps) {
  return <Component {...props} />;
}
