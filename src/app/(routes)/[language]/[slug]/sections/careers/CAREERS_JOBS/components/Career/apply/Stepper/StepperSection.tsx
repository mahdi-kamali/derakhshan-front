import { Icon } from "@iconify/react/dist/iconify.js";
import { Stepper } from "@progress/kendo-react-layout";
import React from "react";
import { IGroupProps } from "../Forms/Forms";
import styles from "./styles.module.scss";
import { useParams } from "next/navigation";
import { LanguagesENUM } from "@/types/Language/Language.types";
interface IProps {
  step: IGroupProps["step"];
  setStep: (step: IGroupProps["step"]) => void;
}

export default function StepperSection(props: IProps) {
  const { language }: { language: LanguagesENUM } = useParams();
  const { setStep, step } = props;

  const items = [
    {
      svgIcon: <Icon icon='solar:user-bold' />,
      label: language === "FA" ? "اطلاعات شخصی" : "Personal Info",
    },
    {
      svgIcon: <Icon icon='tdesign:education-filled' />,
      label: language === "FA" ? "تحصیلات" : "Education",
    },
    {
      svgIcon: <Icon icon='mdi:briefcase' />,
      label: language === "FA" ? "سوابق کاری" : "Work Experience",
    },
    {
      svgIcon: <Icon icon='mdi:star-circle' />,
      label: language === "FA" ? "مهارت‌ها" : "Skills",
    },
    {
      svgIcon: <Icon icon='mdi:desktop-classic' />,
      label: language === "FA" ? "نرم‌افزارها" : "Software",
    },
    {
      svgIcon: <Icon icon='mdi:translate' />,
      label: language === "FA" ? "زبان‌ها" : "Languages",
    },
    {
      svgIcon: <Icon icon='mdi:upload' />,
      label: language === "FA" ? "آپلود رزومه" : "Resume Upload",
    },
  ];

  return (
    <Stepper
      value={step}
      items={items.map((i) => ({ label: i.label }))}
      item={(item) => {
        const { index, current } = item;
        const icon = items[index!!].svgIcon;

        const stepClass = [styles.step, current && styles.isActive]
          .filter(Boolean)
          .join(" ");

        return (
          <div
            className={stepClass}
            onClick={() => setStep(index!! as IGroupProps["step"])}>
            {icon}
            <span>{items[index!!].label}</span>
          </div>
        );
      }}
    />
  );
}
