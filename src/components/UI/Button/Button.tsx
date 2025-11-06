import { IVariant } from "@/types/Variants.types";

import styles from "./styles.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useParams } from "next/navigation";
import { LanguagesENUM } from "@/types/Language/Language.types";

interface IProps {
  title: string;
  icon: string;
  variant: keyof typeof IVariant;
  fill?: "fill" | "outline";
  style?: object;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button(props: IProps) {
  const { language }: { language: LanguagesENUM } = useParams();

  const {
    icon,
    title,
    variant,
    fill = "fill",
    style,
    disabled,
    onClick,
  } = props;

  const classs = [styles.button, styles[variant], styles[fill]].join(" ");

  return (
    <button
      className={classs}
      lang={language}
      type='button'
      style={style}
      onClick={onClick}>
      {icon !== "none" && <Icon icon={icon} />}
      {title && <span>{title}</span>}
    </button>
  );
}
