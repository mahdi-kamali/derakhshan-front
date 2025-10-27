import { ReactNode } from "react";

import styles from "./styles.module.scss";
import { useParams } from "next/navigation";
import { LanguagesENUM } from "@/types/Language/Language.types";

interface IProps {
  children: ReactNode;
  font?: "smooch-sans" | "syne";
}

export default function Description(props: IProps) {
  const { language }: { language: LanguagesENUM } = useParams();

  const { children, font = "smooch-sans" } = props;
  return (
    <p
      className={styles.text}
      lang={language}>
      {children}
    </p>
  );
}
