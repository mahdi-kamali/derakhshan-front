import { CSSProperties, HTMLInputTypeAttribute, ReactElement } from "react";

import styles from "./styles.module.scss";

interface IProps extends CSSProperties {
  icon: ReactElement;
  title: string;
  required?: boolean;
  name: string;
  type?: HTMLInputTypeAttribute;
  onChange: (value: string) => void;
  rtl?: boolean;
  multiLine?: {
    rows: number;
    cols: number;
  };
}

export default function Text(props: IProps) {
  const {
    icon,
    name,
    onChange,
    required = true,
    title,
    type = "text",
    rtl = false,
    multiLine,
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
        {multiLine && (
          <textarea
            name={name}
            onChange={(event) => {
              const value = event.target.value;
              onChange(value);
            }}
            placeholder={title}
            rows={multiLine.rows}
            cols={multiLine.cols}
          />
        )}
        {!multiLine && (
          <input
            type={type}
            placeholder={title}
            name={name}
            onChange={(e) => {
              const value = e.target.value;
              onChange(value);
            }}
            required={required}
          />
        )}
      </div>
    </div>
  );
}
