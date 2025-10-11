import { ReactElement } from "react";
import styles from "./styles.module.scss";
interface IProps {
  children: React.ReactElement | ReactElement[] | any;
  title: string;
  className?: string;
}

export default function PageContainer(props: IProps) {
  const { children, title, className } = props;

  const classs = [className, styles.container].join(" ");

  return (
    <main className={classs}>
      <title>{title}</title>
      {children}
    </main>
  );
}
