import { IVariant } from "@/types/Variants.types";

import styles from "./styles.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";

interface IProps {
  title: string;
  icon: string;
  onClick?: () => void;
  variant: keyof typeof IVariant;
  fill?: "fill" | "outline";
}

export default function Button(props: IProps) {
  const { icon, title, variant, fill = "fill", onClick } = props;

  const classs = [styles.button, styles[variant], styles[fill]].join(" ");

  return (
    <button
      className={classs}
      type='button'>
      <Icon icon={icon} />
      <span>{title}</span>
    </button>
  );
}
