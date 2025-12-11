import React from "react";
import { NumericFormat } from "react-number-format";
import { IField } from "../Field.types";
import { useFormikContext } from "formik";

export default function NumberField(props: IField) {
  if (props.type !== "number") return <></>;
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
    sperators,
  } = props;

  const useSeperators = sperators === undefined || sperators === true;

  return (
    <NumericFormat
      defaultValue={value}
      value={value}
      thousandSeparator={useSeperators ? "," : undefined}
      decimalSeparator={useSeperators ? "." : undefined}
      placeholder={title}
      isAllowed={(value) => {
        return max > Number(value.value);
      }}
      onValueChange={(values) => {
        onChange(values.value);
        setTimeout(() => {
          formik.validateField(name);
        }, 100);
      }}
    />
  );
}
