import { ISection } from "@/types/sections.types";
import { LanguagesENUM } from "@/types/Language/Language.types";
import Component from "./Component/Component";

type IProps = {
  language: LanguagesENUM;
} & (
  | {
      section: Extract<ISection, { type: "POST_PRESS" }>;
    }
  | {
      section: Extract<ISection, { type: "PRESS" }>;
    }
  | {
      section: Extract<ISection, { type: "PREE_PRESS" }>;
    }
);

export default function SERVICE(props: IProps) {
  return <Component {...props} />;
}
