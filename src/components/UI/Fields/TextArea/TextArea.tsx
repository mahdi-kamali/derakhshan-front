import React from "react";
import { IField } from "../Field.types";
import { useFormikContext } from "formik";

export default function TextArea(props: IField) {
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
      rows={multiLine!!.rows}
      cols={multiLine!!.cols}
      value={value}
      maxLength={maxLength}
    />
  );
}
