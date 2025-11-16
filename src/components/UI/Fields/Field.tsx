import styles from "./styles.module.scss";
import { IField } from "./Field.types";
import DatePicker from "react-multi-date-picker";

import persian from "react-date-object/calendars/persian";
import english from "react-date-object/calendars/gregorian";
import persian_fa from "react-date-object/locales/persian_fa";
import english_en from "react-date-object/locales/gregorian_en";
import { useRef } from "react";
import { useFormikContext } from "formik";
import Base from "./Base/Base";
import Image from "./Image/Image";
import Array from "./Array/Array";
import { useParams } from "next/navigation";
import { LanguagesENUM } from "@/types/Language/Language.types";

export default function Field(props: IField) {
  const { language }: { language: LanguagesENUM } = useParams();

  const {
    name,
    onChange = () => {},
    required = true,
    title,
    type = "text",
    multiLine,
    value,
  } = props;

  const pickerRef = useRef<any>(null);

  const formik = useFormikContext();

  const RenderTextArea = () => {
    if (!multiLine) return <></>;
    return (
      <textarea
        name={name}
        onChange={(event) => {
          const value = event.target.value;
          onChange(value);
          setTimeout(() => {
            formik.validateField(name);
          }, 100);
        }}
        placeholder={title}
        rows={multiLine.rows}
        cols={multiLine.cols}
        value={value}
      />
    );
  };

  const RenderDatePicker = () => {
    return (
      <DatePicker
        className={styles.datePicker}
        onChange={(event) => {
          onChange(event?.toDate());
        }}
        calendar={language === LanguagesENUM.FA ? persian : english}
        locale={language === LanguagesENUM.FA ? persian_fa : english_en}
        ref={pickerRef}
        placeholder={props.title}
      />
    );
  };

  const RenderSelect = () => {
    const { options } = props as Extract<IField, { type: "select" }>;
    return (
      <select
        onChange={(e) => {
          const value = e.target.value;
          onChange(value);
        }}
        name={name}
        required={required}>
        <option
          key={"undefind"}
          value={undefined}>
          {title}
        </option>
        {options.map((opt) => {
          return (
            <option
              key={opt.value}
              value={opt.value}>
              {opt.label}
            </option>
          );
        })}
      </select>
    );
  };

  const RenderImage = () => {
    return (
      <Image
        {...(props as any)}
        onChange={(file) => {
          onChange(file);
          setTimeout(() => {
            formik.validateField(name);
          }, 100);
        }}
      />
    );
  };

  const RenderNormalField = () => {
    return (
      <input
        type={type}
        placeholder={title}
        name={name}
        onChange={(e) => {
          const value = e.target.value;
          onChange(value);
          setTimeout(() => {
            formik.validateField(name);
          }, 100);
        }}
        required={required}
        value={value}
      />
    );
  };

  const RenderArray = () => {
    return <Array {...(props as any)} />;
  };

  const RenderField = () => {
    if (type === "select") return RenderSelect();
    if (type === "date") return RenderDatePicker();
    if (type === "image") return RenderImage();
    if (type === "text" && props.multiLine) return RenderTextArea();
    if (type === "array") return RenderArray();
    return RenderNormalField();
  };

  return <Base {...props}>{RenderField()}</Base>;
}
