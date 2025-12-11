import { IField, ISelect } from "../Field.types";
import { LanguagesENUM } from "@/types/Language/Language.types";
import { useFormikContext } from "formik";
import { useParams } from "next/navigation";

export interface Ioption {
  label: string;
  value: any;
}

export default function Select(props: IField) {
  if (props.type !== "select") return <></>;

  const {
    icon,
    name,
    onChange,
    required = true,
    title,
    type = "text",
    rtl = false,
    value,
    options,
  } = props;

  const { language }: { language: LanguagesENUM } = useParams();
  const formik = useFormikContext();

  return (
    <select
      onChange={(e) => {
        const value = e.target.value;
        onChange(value);
        setTimeout(() => {
          formik.validateField(name);
        }, 100);
      }}
      name={name}
      required={required}
      value={value}>
      <option
        key={"undefind"}
        value={""}>
        {title}
      </option>
      ;
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
}
