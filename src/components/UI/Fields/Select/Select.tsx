import { CSSProperties, HTMLInputTypeAttribute, ReactElement } from "react";

import styles from "./styles.module.scss";

export interface Ioption {
  label: string;
  value: any;
}

interface IProps extends CSSProperties {
  icon: ReactElement;
  title: string;
  required?: boolean;
  name: string;
  type?: HTMLInputTypeAttribute;
  onChange: (value: string) => void;
  rtl?: boolean;
  options: Ioption[];
  value?: any;
}

export default function Select(props: IProps) {
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

  return (
    <div
      className={styles.text}
      dir={rtl ? "rtl" : "ltr"}
      style={{
        ...props,
      }}>
      <span className={styles.icon}>{icon}</span>
      <div className={styles.field}>
        <select
          onChange={(e) => {
            const value = e.target.value;
            onChange(value);
          }}
          name={name}
          required={required}
          defaultValue={value}>
          {options.map((opt) => {
            return <option key={opt.value} value={opt.value}>{opt.label}</option>;
          })}
        </select>
      </div>
    </div>
  );
}
