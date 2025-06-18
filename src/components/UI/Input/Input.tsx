"use client";

import InputFile from "./InputFile/InputFile";
import InputSelect from "./InputSelect/InputSelect";
import InputDate from "./InputDate/InputDate";

import styles from "./styles.module.scss";

interface InputProps {
  type?: string;
  title?: string;
  value?: string;
  options?: { value: string; name: string }[];
  className?: string;
  onChange?: (value: string) => void;
}

const Input = ({
  type,
  title,
  value,
  options,
  className,
  onChange,
}: InputProps) => {
  const handleSelectChange = (value: string) => {
    if (onChange) onChange(value);
  };

  return (
    <div className={`${styles.Input} ${className}`}>
      {type === "select" || type === "select-type" ? (
        <InputSelect
        name={title}
        value={value}
        options={options || []}
        type={type === "select-type" ? true : false}
        onChange={handleSelectChange}
      />
      ) : type === "file" ? (
        <InputFile
          onChange={(file) => {
            console.log("فایل انتخاب‌شده:", file);
          }}
        />
      ) : type === "date" ? (
        <InputDate value={value} onChange={(e) => onChange?.(e)} />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
        />
      )}
    </div>
  );
};

export default Input;
