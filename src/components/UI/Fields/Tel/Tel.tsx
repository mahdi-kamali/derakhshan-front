import { FormikContextType } from "formik";
import { ArrayField, IField, ITelField } from "../Field.types";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import styles from "./styles.module.scss";
import { useParams } from "next/navigation";
import { LanguagesENUM } from "@/types/Language/Language.types";
import { useEffect, useRef, useState } from "react";

interface IProps extends Extract<IField, ITelField> {
  onChange: (event: any) => void;
  formik: FormikContextType<any>;
}

export default function Tel(props: IProps) {
  const { name, onChange, formik, required, value, title } = props;

  const { language }: { language: LanguagesENUM } = useParams();

  const [key, setKey] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (key > 0) {
      inputRef.current?.focus();
    }
  }, [key]);

  return (
    <div
      className={styles.root}
      lang={language}>
      <PhoneInput
        containerClass={styles.container}
        containerStyle={{
          color: props.color,
        }}
        country={language === LanguagesENUM.FA ? "ir" : "us"}
        inputClass={styles.inputClass}
        searchClass={styles.searchClass}
        dropdownClass={styles.dropDownClass}
        buttonClass={styles.buttonClass}
        value={props.value}
        autoFormat={true}
        key={key}
        inputProps={{
          ref: (el: any) => {
            inputRef.current = el;
          },
        }}
        onChange={(e) => {
          let value = e;

          if (language === LanguagesENUM.FA) {
            if (value.startsWith("980")) {
              value = "98";
              setKey((prev) => prev + 1);
            }
          }

          onChange(value);

          setTimeout(() => {
            formik.validateField(name);
          }, 100);
        }}
      />
    </div>
  );
  return (
    <div className={styles.container}>
      <input
        type='tel'
        placeholder={title}
        name={name}
        onChange={(e) => {
          const value = e.target.value;
          const numbersOnly = value.replace(/[^0-9+]/g, "");
          onChange(numbersOnly);
          setTimeout(() => {
            formik.validateField(name);
          }, 100);
        }}
        required={required}
        value={value}
      />
    </div>
  );
}
