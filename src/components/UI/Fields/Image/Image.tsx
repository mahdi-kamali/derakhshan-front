import {
  ChangeEvent,
  ChangeEventHandler,
  CSSProperties,
  HTMLInputTypeAttribute,
  ReactElement,
  useState,
} from "react";

import styles from "./styles.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useParams } from "next/navigation";
import { LanguagesENUM } from "@/types/Language/Language.types";

interface IProps extends CSSProperties {
  icon: ReactElement;
  title: string;
  required?: boolean;
  name: string;
  type?: HTMLInputTypeAttribute;
  onChange: (file?: File) => void;
  rtl?: boolean;
  value?: any;
}

export default function Image(props: IProps) {
  const {
    icon,
    name,
    onChange,
    required = true,
    title,
    rtl = false,
    value,
  } = props;

  const [file, setFile] = useState<File | null>();

  const { language }: { language: LanguagesENUM } = useParams();

  return (
    <div
      className={styles.container}
      dir={rtl ? "rtl" : "ltr"}
      style={{
        ...props,
      }}>
      <label className={styles.field}>
        <img
          src={file ? URL.createObjectURL(file) : "/images/placeholder.svg"}
          alt=''
        />
        <input
          type={"file"}
          placeholder={title}
          name={name}
          onChange={(e) => {
            const value = e.target.value;
            const files = e.target.files;
            const file = e.target.files!![0];
            if (files) {
              setFile(e.target.files!![0]);
            } else {
              setFile(null);
            }
            onChange(file);
          }}
          required={required}
          defaultValue={value}
        />

        <div className={styles.action}>
          <span>{language === LanguagesENUM.FA ? "انتخاب" : "Select"}</span>
        </div>
      </label>
      <span className={styles.icon}>{icon}</span>
      {file && (
        <Icon
          className={styles.success}
          icon='el:ok-sign'
        />
      )}
    </div>
  );
}
