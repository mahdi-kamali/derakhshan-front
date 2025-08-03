"use client";

import { useState } from "react";
import Button from "@/components/UI/Button/Button";
import styles from "./styles.module.scss";
import Input from "@/components/UI/Input/Input";

const formSteps = [
  { title: "نام", type: "text", key: "fullName" },
  { title: "نام خانوادگی", type: "text", key: "fullName" },
  { title: "نام شرکت", type: "text", key: "nationalId" },
  {
    title: "زمینه فعالیت",
    type: "select",
    key: "maritalStatus",
    options: [
      { value: "صتایع غذایی", name: "صتایع غذایی" },
      { value: "صنایع آرایشی", name: "صنایع آرایشی" },
      { value: "صنایع بهداشتی-دارویی", name: "صنایع بهداشتی-دارویی" },
      { value: "سایر", name: "سایر" },
    ],
  },
  { title: "شماره تماس", type: "text", key: "birthPlace" },
];

const formStepsStyles = [
  styles.personalInfo,
  styles.historyEducat,
  styles.historyJob,
  styles.skills,
  styles.softwares,
  styles.languages,
  styles.upload,
];

// Define types
type FormData = {
  [key: string]: string | number | File | undefined;
};

type SkillItem = {
  skillType: string;
  level: string;
};

const Form = () => {
  const [formData, setFormData] = useState<FormData>({});
  const [currentStep, setCurrentStep] = useState(0);
  const [isStepValid, setIsStepValid] = useState(true);

  // Handle multi-entry input change
  const handleTempChange = (key: keyof SkillItem, value: string) => {};

  // Final submission
  const handleSubmit = () => {};

  return (
    <div className={styles.form}>
      <div className={`${styles.middle} ${formStepsStyles[currentStep]}`}>
        <div className={styles.contents}>
          {formSteps.map((input, index) => (
            <div key={index} className={styles.Input}>
              <p>{input.title}</p>
              <Input
                type={input.type}
                value={""}
                onChange={(val: string) =>
                  handleTempChange(input.key as keyof SkillItem, val)
                }
                options={input.options}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bottom}>
        <Button
          title="ارسال سفارش"
          icon="none"
          variant="primary"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Form;
