import { IVariant } from "@/types/Variants.types";

import styles from "./styles.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";

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
    <button className={classs} type="button" style={style} onClick={onClick}>
      {icon !== "none" && <Icon icon={icon} />}
      {title && <span>{title}</span>}
    </button>
  );
}
