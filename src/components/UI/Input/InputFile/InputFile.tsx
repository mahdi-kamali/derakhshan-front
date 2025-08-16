"use client";

import styles from "./styles.module.scss";
import { useRef, useState } from "react";
import Button from "../../Button/Button";

interface InputFileProps {
  placeholder?: string;
  onChange?: (file: File) => void;
}

const InputFile = ({ placeholder, onChange }: InputFileProps) => {
  const [fileName, setFileName] = useState<string>("");
  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleInputChange = () => {
    const file = inputFileRef.current?.files?.[0];
    if (file) {
      setFileName(file.name);
      if (onChange) onChange(file);
    }
  };

  return (
    <div className={styles.inputfile}>
      <input
        ref={inputFileRef}
        onChange={handleInputChange}
        type="file"
        style={{ display: "none" }}
      />
      <Button
        title={fileName !== "" ? fileName : placeholder ? placeholder : ""}
        icon="none"
        fill="outline"
        variant="primary"
        onClick={() => {
          inputFileRef.current?.click();
        }}
      />
    </div>
  );
};

export default InputFile;
