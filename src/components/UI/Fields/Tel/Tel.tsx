import { FormikContextType } from "formik";
import { ArrayField, IField, ITelField } from "../Field.types";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import styles from "./styles.module.scss";
import { useParams } from "next/navigation";
import { LanguagesENUM } from "@/types/Language/Language.types";

interface IProps extends Extract<IField, ITelField> {
  onChange: (event: any) => void;
  formik: FormikContextType<any>;
}

export default function Tel(props: IProps) {
  const { name, onChange, formik, required, value, title } = props;

  const { language }: { language: LanguagesENUM } = useParams();

  return (
    <div
      className={styles.root}
      lang={language}>
      <PhoneInput
        containerClass={styles.container}
        containerStyle={{
          color: props.color,
        }}
        country={"ir"}
        inputClass={styles.inputClass}
        searchClass={styles.searchClass}
        dropdownClass={styles.dropDownClass}
        buttonClass={styles.buttonClass}
        onChange={(e) => {
          const value = e;
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
