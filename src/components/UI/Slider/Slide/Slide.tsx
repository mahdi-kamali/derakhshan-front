import { ReactElement } from "react";

import styles from "./styles.module.scss";

interface IProps {
  children: ReactElement;
  className: string;
}

export default function Slide(props: IProps) {
  const { children, className } = props;

  const classs = [className, styles.slide].join(" ");

  return <div className={classs}>{children}</div>;
}
