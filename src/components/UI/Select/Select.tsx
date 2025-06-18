"use client";

import { useState } from "react";
import styles from "./styles.module.scss";

interface OptionType {
  label: string;
  value: string;
}

interface SelectProps {
  name?: string;
  options?: OptionType[];
  onChange?: (value: OptionType | null) => void;
  defaultValue?: OptionType | null;
  disabled?: boolean;
}

const Select = ({
  name,
  options = [],
  onChange,
  defaultValue = null,
  disabled = false,
}: SelectProps) => {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(
    defaultValue
  );

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    const selected = options.find((opt) => opt.value === selectedValue) || null;
    setSelectedOption(selected);
    if (onChange) onChange(selected);
  };

  return (
    <select
      name={name}
      value={selectedOption?.value || ""}
      onChange={handleChange}
      disabled={disabled}
      className={styles.select}
    >
      <option value="" disabled>
        انتخاب کنید
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
