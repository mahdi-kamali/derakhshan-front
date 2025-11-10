import styles from "./styles.module.scss";
import { IField, ISelect } from "../Field.types";


export interface Ioption {
  label: string;
  value: any;
}

export default function Select(props: Extract<IField, ISelect>) {
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
          required={required}>
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
      </div>
    </div>
  );
}
