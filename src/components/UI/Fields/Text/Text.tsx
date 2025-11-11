import styles from "./styles.module.scss";
import { useParams } from "next/navigation";
import { LanguagesENUM } from "@/types/Language/Language.types";
import { IField } from "../Field.types";
import DatePicker from "react-multi-date-picker";

import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useRef } from "react";
import lodash from "lodash";
import { useFormikContext } from "formik";

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
    errors,
  } = props;

  const error = lodash.get(errors, name);

  const textClass = [styles.text, error && styles.hasError].join(" ");

  const pickerRef = useRef<any>(null);

  const RenderInput = () => {
    if (multiLine) return <></>;
    if (type === "date") return <></>;
    return (
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
    );
  };
  const RenderTextArea = () => {
    if (!multiLine) return <></>;
    return (
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
    );
  };
  const RenderDatePicker = () => {
    if (type !== "date") return <></>;
    return (
      <DatePicker
        className={styles.datePicker}
        onChange={(event) => {
          onChange(event?.toDate());
        }}
        calendar={persian}
        locale={persian_fa}
        ref={pickerRef}
        placeholder={props.title}
      />
    );
  };

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
        {RenderTextArea()}
        {RenderInput()}
        {RenderDatePicker()}
      </div>

      {error && (
        <div className={styles.error}>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}
