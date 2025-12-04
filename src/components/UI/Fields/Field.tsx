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

import { NumericFormat } from "react-number-format";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ShowError } from "@/utils/toast/Toast";

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
    max = 9999999999999,
    maxLength,
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
        maxLength={maxLength}
      />
    );
  };

  const RenderDatePicker = () => {
    return (
      <DatePicker
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
  };

  const RenderSelect = () => {
    const { options } = props as Extract<IField, { type: "select" }>;
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
        value={value}
      />
    );
  };

  const RenderFile = () => {
    if (type !== "file") return <></>;
    const { accept, placeHolder, maxSizeMB } = props as Extract<
      IField,
      { type: "file" }
    >;

    return (
      <label
        className={styles.fileField}
        lang={language}>
        <span>
          <Icon
            icon={value ? "flat-color-icons:ok" : "ant-design:select-outlined"}
          />
          {placeHolder}
        </span>

        <input
          type='file'
          accept={accept}
          required={required}
          placeholder={title}
          name={name}
          onChange={(event) => {
            const files = event.target.files || [];

            if (files?.length > 0) {
              const file = files[0].size;
              const size = Number((file / 1000).toFixed(2));

              if (size > maxSizeMB * 1000) {
                const unit = maxSizeMB < 1 ? "KB" : "MG";

                const finalSize = maxSizeMB < 1 ? maxSizeMB * 1000 : maxSizeMB;

                const errors = {
                  EN: `The file must not be larger than ${finalSize} ${unit}`,
                  FA: `فایل نباید از ${finalSize} ${unit} بزرگتر باشد`,
                };

                ShowError(errors[language]);
                onChange(undefined);
                return;
              }
            }

            if (files.length === 0) {
              onChange(undefined);
              return;
            }

            onChange(event);

            setTimeout(() => {
              formik.validateField(name);
            }, 100);
          }}
        />
      </label>
    );
  };

  const RenderNumber = () => {
    const useSeperators =
      (props as any).sperators === undefined ||
      (props as any).sperators === true;

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
  };

  const RenderTel = () => {
    return (
      <div style={{ display: "grid", gridTemplateColumns: "1fr max-content" }}>
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
  };

  const RenderNormalField = () => {
    return (
      <input
        type={type}
        placeholder={title}
        name={name}
        onChange={(e) => {
          const value = e.target.value;
          let lettersOnly = value;
          if (type === "text") {
            lettersOnly = value.replace(/[0-9]/g, "");
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
  };

  const RenderArray = () => {
    return (
      <Array
        {...(props as any)}
        value={value}
      />
    );
  };

  const RenderField = () => {
    if (type === "select") return RenderSelect();
    if (type === "date") return RenderDatePicker();
    if (type === "image") return RenderImage();
    if (type === "text" && props.multiLine) return RenderTextArea();
    if (type === "number") return RenderNumber();
    if (type === "array") return RenderArray();
    if (type === "tel") return RenderTel();
    if (type === "file") return RenderFile();
    return RenderNormalField();
  };

  if (props.show === false) return <></>;
  return <Base {...props}>{RenderField()}</Base>;
}
