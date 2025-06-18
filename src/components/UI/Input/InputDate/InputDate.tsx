import React from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

// import styles from "./styles.module.scss";
import "./style.css";

interface InputDateProps {
  value?: string;
  onChange: (value: string) => void;
}

const InputDate: React.FC<InputDateProps> = ({ value, onChange }) => {
  return (
    <DatePicker
      calendar={persian}
      locale={persian_fa}
      value={value}
      onChange={(date) => {
        if (date) {
          onChange(date.format("YYYY/MM/DD"));
        } else {
          onChange("");
        }
      }}
      calendarPosition="bottom-right"
    />
  );
};

export default InputDate;
