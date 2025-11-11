import styles from "./styles.module.scss";
import { useParams } from "next/navigation";
import { LanguagesENUM } from "@/types/Language/Language.types";
import { IField } from "../Field.types";

export default function Text(props: IField) {
  const { language }: { language: LanguagesENUM } = useParams();

  const {
    icon,
    name,
    onChange = () => {},
    required = true,
    title,
    type = "text",
    rtl = false,
    multiLine,
    value,
    error,
  } = props;

  const textClass = [styles.text, error && styles.hasError].join(" ");

  return (
    <div
      className={textClass}
      dir={rtl ? "rtl" : "ltr"}
      style={{
        ...props,
      }}
      lang={language}>
      <span className={styles.icon}>{icon}</span>
      <div className={styles.field}>
        {multiLine && (
          <textarea
            name={name}
            onChange={(event) => {
              const value = event.target.value;
              onChange(value);
            }}
            placeholder={title}
            rows={multiLine.rows}
            cols={multiLine.cols}
            value={value}
          />
        )}
        {!multiLine && (
          <input
            type={type}
            placeholder={title}
            name={name}
            onChange={(e) => {
              const value = e.target.value;
              onChange(value);
            }}
            required={required}
            value={value}
          />
        )}
      </div>
      {error && (
        <div className={styles.error}>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}
