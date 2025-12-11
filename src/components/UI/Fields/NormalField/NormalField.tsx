import React from "react";
import { IField } from "../Field.types";
import { useFormikContext } from "formik";
import { useParams } from "next/navigation";
import { LanguagesENUM } from "@/types/Language/Language.types";

export default function NormalField(props: IField) {
  const { language }: { language: LanguagesENUM } = useParams();
  const formik = useFormikContext();

  const {
    name,
    onChange = () => {},
    required = true,
    title,
    type = "text",
    multiLine,
    value,
    max = 9999999999999,
    maxLength,
  } = props;

  return (
    <input
      type={type}
      placeholder={title}
      name={name}
      onChange={(e) => {
        const value = e.target.value;
        let lettersOnly = value;
        if (type === "text") {
          lettersOnly = value.replace(/\d/g, "");
        }
        onChange(lettersOnly);
        setTimeout(() => {
          formik.validateField(name);
        }, 100);
      }}
      required={required}
      value={value}
    />
  );
}
