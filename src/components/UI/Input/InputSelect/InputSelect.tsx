"use client";

import { useState } from "react";
import styles from "./styles.module.scss";
import Button from "../../Button/Button";

interface InputSelectProps {
  name?: string;
  value?: string;
  options?: { value: string; name: string }[];
  type?: boolean;
  className?: string;
  onChange?: (value: string) => void;
}

const InputSelect = ({
  name,
  value,
  options,
  type,
  className,
  onChange,
}: InputSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (val: string) => {
    setIsOpen(false);
    if (onChange) onChange(val);
  };

  const inputPlaceHolder = `${type ? `بنویسید یا` : ""} انتخاب کنید`;

  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.type}>
        <div
        className={styles.Input}
          onClick={() => {
            if (!type) {
              setIsOpen((prev) => !prev);
            }
          }}
          style={{
            cursor: !type ? "pointer" : "default",
          }}
        >
          <input
            value={value}
            onChange={(e) => handleSelect(e.target.value)}
            placeholder={inputPlaceHolder}
            name={name}
            disabled={!type}
            style={{
              pointerEvents: !type ? "none" : "auto",
            }}
          />
        </div>

        <div className={styles.buttons}>
          <div>
            {value !== "" && (
              <Button
                onClick={() => handleSelect("")}
                variant="none"
                icon="material-symbols-light:close-small"
                title=""
              />
            )}
          </div>
          <Button
            onClick={() => setIsOpen((prev) => !prev)}
            variant="none"
            icon={
              isOpen
                ? "material-symbols-light:keyboard-arrow-up"
                : "material-symbols-light:keyboard-arrow-down"
            }
            title=""
          />
        </div>
      </div>

      {isOpen && (
        <ul className={styles.selectList}>
          {options?.map((item) => (
            <li
              key={item.value}
              onClick={() => handleSelect(item.value)}
              className={styles.optionItem}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InputSelect;
