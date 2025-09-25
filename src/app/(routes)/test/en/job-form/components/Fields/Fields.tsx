"use client";

import { useState } from "react";
import Button from "@/components/UI/Button/Button";
import styles from "./styles.module.scss";
import Input from "@/components/UI/Input/Input";

type Option = {
  value: string;
  name: string;
  key?: string;
};

type Field = {
  title: string;
  key: string;
  type: "text" | "number" | "date" | "file" | "select" | "select-type";
  options?: Option[];
};

type Values = {
  [key: string]: string;
};

const Fields = ({
  fields,
  items,
  onAddItem,
}: {
  fields?: Field[];
  items: Values[];
  onAddItem: (item: Values) => void;
}) => {
  const [values, setValues] = useState<Values>({});

  const handleTempChange = (key: string, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const addItem = () => {
    if (Object.values(values).some((v) => v === "")) return;
    onAddItem(values);
    setValues({});
  };

  return (
    <div className={styles.form}>
      <div className={styles.fields}>
        {/* inputs fields */}
        <div className={styles.contents}>
          {fields?.map((field, index) => (
            <div key={index} className={styles.Input}>
              <p>{field.title}</p>
              <Input
                type={field.type}
                value={values[field.key] || ""}
                onChange={(val: string) => handleTempChange(field.key, val)}
                options={field.options}
              />
            </div>
          ))}

          <Button
            title="Add"
            icon="ic:baseline-plus"
            variant="primary"
            onClick={addItem}
          />
        </div>

        {/* item list */}
        <div className={styles.list}>
          {items.map((item, i) => (
            <div key={i} className={styles.listItem}>
              <p>
                {fields?.map((field, j) => (
                  <span key={field.key}>
                    {item[field.key]} {fields.length - 1 > j && " - "}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fields;
