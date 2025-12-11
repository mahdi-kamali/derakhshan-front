import styles from "./styles.module.scss";
import { IField } from "./Field.types";
import { useFormikContext } from "formik";
import Base from "./Base/Base";
import Image from "./Image/Image";
import Array from "./Array/Array";
import { useParams } from "next/navigation";
import { LanguagesENUM } from "@/types/Language/Language.types";
import { NumericFormat } from "react-number-format";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ShowError } from "@/utils/toast/Toast";
import Tel from "./Tel/Tel";
import TextArea from "./TextArea/TextArea";
import DatePicker from "./DatePicker/DatePicker";
import Select from "./Select/Select";
import NumberField from "./NumberField/NumberField";
import FileInput from "./FileInput/FileInput";
import NormalField from "./NormalField/NormalField";

export default function Field(props: IField) {
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

  const RenderField = () => {
    if (type === "select") return <Select {...props} />;
    if (type === "date") return <DatePicker {...props} />;
    if (type === "image")
      return (
        <Image
          {...(props as any)}
          onChange={(file) => {
            onChange(file);
            setTimeout(() => {
              formik.validateField(name);
            }, 100);
          }}
          value={value}
        />
      );
    if (type === "text" && props.multiLine) return <TextArea {...props} />;
    if (type === "number") return <NumberField {...props} />;
    if (type === "array")
      return (
        <Array
          {...(props as any)}
          value={value}
        />
      );
    if (type === "tel")
      return (
        <Tel
          {...(props as any)}
          value={value}
          formik={formik}
        />
      );
    if (type === "file") return <FileInput {...props} />;
    return <NormalField {...props} />;
  };

  if (props.show === false) return <></>;
  return <Base {...props}>{RenderField()}</Base>;
}
