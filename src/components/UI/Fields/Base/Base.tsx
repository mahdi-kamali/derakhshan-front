import styles from "./styles.module.scss";
import { useParams } from "next/navigation";
import { LanguagesENUM } from "@/types/Language/Language.types";
import { IField } from "../Field.types";
import lodash from "lodash";
import { ReactElement } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

type IProps = {
  children: ReactElement | ReactElement[];
} & IField;

export default function Base(props: IProps) {
  const { children } = props;

  const { language }: { language: LanguagesENUM } = useParams();

  const { icon, name, errors } = props;

  const error = lodash.get(errors, name);

  const textClass = [styles.continer, error && styles.hasError].join(" ");

  if (props.type === "array") return children;

  return (
    <div
      className={textClass}
      dir={language === LanguagesENUM.FA ? "rtl" : "ltr"}
      style={{
        ...props,
      }}
      lang={language}>
      <span className={styles.icon}>{icon}</span>
      <div className={styles.field}>{children}</div>
      {error && (
        <div className={styles.error}>
          <Icon
            icon='material-symbols:error-rounded'
            color='white'
          />
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}
