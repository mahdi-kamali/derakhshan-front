"use client";

import { useState } from "react";
import PageContainer from "@/components/containers/PageContainer/PageContainer";

import Fields from "./components/Fields/Fields";

import Button from "@/components/UI/Button/Button";
import styles from "./styles.module.scss";
import Input from "@/components/UI/Input/Input";

type Option = {
  value: string;
  name: string;
  key?: string;
};

type FormField = {
  title: string;
  key: string;
  type: "text" | "number" | "date" | "file" | "select" | "select-type";
  options?: Option[];
};

const steps: {
  name: string;
  inputs?: FormField[];
  fields?: FormField[];
}[] = [
  {
    name: "مشخصات فردی",
    inputs: [
      { title: "نام و نام خانوادگی", type: "text", key: "fullName" },
      { title: "کد ملی", type: "text", key: "nationalId" },
      { title: "تاریخ تولد", type: "date", key: "birthDate" },
      { title: "محل تولد", type: "text", key: "birthPlace" },
      { title: "محل صدور", type: "text", key: "issuePlace" },
      {
        title: "وضعیت تاهل",
        type: "select",
        key: "maritalStatus",
        options: [
          { value: "مجرد", name: "مجرد" },
          { value: "متاهل", name: "متاهل" },
        ],
      },
      {
        title: "وضعیت نظام وظیفه",
        type: "select",
        key: "militaryStatus",
        options: [
          { value: "دارای معافیت دائم", name: "دارای معافیت دائم" },
          { value: "دارای معافیت موقت", name: "دارای معافیت موقت" },
          { value: "پایان خدمت", name: "پایان خدمت" },
          { value: "در حال تحصیل", name: "در حال تحصیل" },
        ],
      },
      { title: "نام پدر", type: "text", key: "fatherName" },
      { title: "شغل پدر", type: "text", key: "fatherJob" },
      { title: "سابقه پرداخت بیمه", type: "text", key: "insuranceHistory" },
      { title: "آدرس", type: "text", key: "address" },
      { title: "شماره تماس", type: "text", key: "phone" },
    ],
  },
  {
    name: "سوابق تحصیلی",
    fields: [
      {
        title: "رشته تحصیلی",
        type: "select-type",
        key: "field",
        options: [
          { value: "حسابداری", name: "حسابداری" },
          { value: "گرافیست", name: "گرافیست" },
        ],
      },
      {
        title: "مقطع تحصیلی",
        type: "select",
        key: "level",
        options: [
          { value: "مبتدی", name: "مبتدی" },
          { value: "متوسط", name: "متوسط" },
          { value: "خوب", name: "خوب" },
          { value: "حرفه‌ای", name: "حرفه‌ای" },
        ],
      },
      {
        title: "معدل",
        type: "number",
        key: "gpa",
      },
      { title: "نام موسسه آموزش", type: "text", key: "university" },
    ],
  },
  {
    name: "سوابق کاری و تجربی",
    inputs: [
      { title: "آخرین حقوق دریافتی", type: "text", key: "lastSalary" },
      { title: "مدت زمان بیمه", type: "text", key: "insuranceDuration" },
      {
        title: "بیمه بیکاری استفاده کرده اید؟",
        type: "text",
        key: "unemploymentInsurance",
      },
    ],
    fields: [
      { title: "سازمان", type: "text", key: "workCompany" },
      { title: "زمینه همکاری", type: "text", key: "workField" },
      { title: "مدت همکاری", type: "text", key: "workDuration" },
      { title: "علت قطع همکاری", type: "text", key: "workReason" },
    ],
  },
  {
    name: "مهارت ها",
    fields: [
      {
        title: "مهارت",
        type: "select-type",
        key: "skillType",
        options: [
          { value: "حسابداری", name: "حسابداری" },
          { value: "گرافیست", name: "گرافیست" },
        ],
      },
      {
        title: "میزان تسلط",
        type: "select",
        key: "level",
        options: [
          { value: "مبتدی", name: "مبتدی" },
          { value: "متوسط", name: "متوسط" },
          { value: "خوب", name: "خوب" },
          { value: "حرفه‌ای", name: "حرفه‌ای" },
        ],
      },
    ],
  },
  {
    name: "نرم افزار",
    fields: [
      {
        title: "نرم افزار",
        type: "select-type",
        key: "software",
        options: [
          { value: "حسابداری", name: "حسابداری" },
          { value: "گرافیست", name: "گرافیست" },
        ],
      },
      {
        title: "میزان تسلط",
        type: "select",
        key: "softwareLevel",
        options: [
          { value: "مبتدی", name: "مبتدی" },
          { value: "متوسط", name: "متوسط" },
          { value: "خوب", name: "خوب" },
          { value: "حرفه‌ای", name: "حرفه‌ای" },
        ],
      },
    ],
  },
  {
    name: "زبان های خارجی",
    fields: [
      {
        title: "زبان",
        type: "select-type",
        key: "language",
        options: [
          { value: "انگلیسی", name: "انگلیسی" },
          { value: "فرانسوی", name: "فرانسوی" },
        ],
      },
      {
        title: "میزان تسلط",
        type: "select",
        key: "languageLevel",
        options: [
          { value: "مبتدی", name: "مبتدی" },
          { value: "متوسط", name: "متوسط" },
          { value: "خوب", name: "خوب" },
          { value: "حرفه‌ای", name: "حرفه‌ای" },
        ],
      },
    ],
  },
  {
    name: "آپلود کردن رزومه",
    inputs: [
      { title: "آپلود رزومه", type: "file", key: "resumeFile" },
      { title: "آپلود عکس سازمانی", type: "file", key: "orgPhoto" },
      { title: "توضیحات", type: "text", key: "resumeDescription" },
      { title: "حقوق درخواستی", type: "text", key: "expectedSalary" },
    ],
  },
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

type Values = {
  [key: string]: string; // key => value
};

const Form = () => {
  const [formData, setFormData] = useState<FormData>({});
  const [currentStep, setCurrentStep] = useState(0);
  const [isStepValid, setIsStepValid] = useState(true);

  const [skills, setSkills] = useState<Values[]>([]);
  const [educations, setEducations] = useState<Values[]>([]);
  const [experiences, setExperiences] = useState<Values[]>([]);
  const [softwares, setSoftwares] = useState<Values[]>([]);
  const [languages, setLanguages] = useState<Values[]>([]);

  // Handle regular input change
  const handleChange = (key: string, value: string | number | File) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Final submission
  const handleSubmit = () => {
    const finalData = {
      ...formData,
      skills,
      softwares,
      languages,
    };

    console.log("Sending to backend:", finalData);
  };

  const stepFieldMap = [
    { items: [], setItems: () => {} },
    { items: educations, setItems: setEducations },
    { items: experiences, setItems: setExperiences },
    { items: skills, setItems: setSkills },
    { items: softwares, setItems: setSoftwares },
    { items: languages, setItems: setLanguages },
    { items: [], setItems: () => {} },
  ];

  return (
    <PageContainer title="فرم استخدام">
      <div className={styles.form}>
        {/* Step navigation */}
        <div className={styles.top}>
          {steps.map((step, index) => (
            <Button
              key={index}
              title={step.name}
              icon="none"
              variant={currentStep === index ? "primary" : "success"}
              fill={currentStep === index ? "fill" : "outline"}
              onClick={() => setCurrentStep(index)}
            />
          ))}
        </div>

        {/* Inputs for normal single-entry */}
        <div className={`${styles.inputs} ${formStepsStyles[currentStep]}`}>
          <div className={styles.contents}>
            {steps[currentStep].inputs?.map((input, index) => (
              <div key={index} className={styles.Input}>
                <p>{input.title}</p>
                <Input
                  type={input.type}
                  value={
                    formData[input.key] !== undefined &&
                    formData[input.key] !== null
                      ? String(formData[input.key])
                      : ""
                  }
                  onChange={(val: string | number | File) =>
                    handleChange(input.key, val)
                  }
                  options={input.options}
                />
              </div>
            ))}
          </div>
        </div>

        {/* fields inputs */}
        {steps[currentStep].fields && stepFieldMap[currentStep] && (
          <Fields
            fields={steps[currentStep].fields}
            items={stepFieldMap[currentStep].items}
            onAddItem={(item) =>
              stepFieldMap[currentStep].setItems((prev: Values[]) => [
                ...prev,
                item,
              ])
            }
          />
        )}

        {/* Navigation buttons */}
        <div className={styles.bottom}>
          <Button
            title="قبلی"
            icon="none"
            variant={currentStep === 0 ? "disable" : "primary"}
            onClick={() => {
              if (isStepValid && currentStep > 0) {
                setCurrentStep(currentStep - 1);
              }
            }}
            disabled={!isStepValid}
          />

          {currentStep < steps.length - 1 ? (
            <Button
              title="بعدی"
              icon="none"
              variant="primary"
              onClick={() => {
                if (isStepValid) {
                  setCurrentStep(currentStep + 1);
                }
              }}
              disabled={!isStepValid}
            />
          ) : (
            <Button
              title="ارسال"
              icon="none"
              variant="primary"
              onClick={handleSubmit}
            />
          )}
        </div>
      </div>
    </PageContainer>
  );
};

export default Form;
