import Dp from "react-multi-date-picker";
import { IField } from "../Field.types";
import styles from "./styles.module.scss";
import { LanguagesENUM } from "@/types/Language/Language.types";
import { useParams } from "next/navigation";
import { useFormikContext } from "formik";
import { useRef } from "react";
import persian from "react-date-object/calendars/persian";
import english from "react-date-object/calendars/gregorian";
import persian_fa from "react-date-object/locales/persian_fa";
import english_en from "react-date-object/locales/gregorian_en";
export default function DatePicker(props: IField) {
  const { onChange = () => {}, value, name } = props;
  const { language }: { language: LanguagesENUM } = useParams();
  const formik = useFormikContext();
  const pickerRef = useRef<any>(null);

  return (
    <Dp
      className={styles.datePicker}
      onChange={(event) => {
        onChange(event?.format("YYYY/MM/DD"));
        setTimeout(() => {
          formik.validateField(name);
        }, 100);
      }}
      calendar={language === LanguagesENUM.FA ? persian : english}
      locale={language === LanguagesENUM.FA ? persian_fa : english_en}
      ref={pickerRef}
      placeholder={props.title}
      editable={false}
      value={value}
    />
  );
}
