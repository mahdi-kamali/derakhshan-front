import { ShowError } from "@/utils/toast/Toast";
import { IField } from "../Field.types";
import styles from "./styles.module.scss";
import { useFormikContext } from "formik";
import { useParams } from "next/navigation";
import { LanguagesENUM } from "@/types/Language/Language.types";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function FileInput(props: IField) {
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


          onChange(files[0])




          setTimeout(() => {
            formik.validateField(name);
          }, 100);
        }}
      />
    </label>
  );
}
