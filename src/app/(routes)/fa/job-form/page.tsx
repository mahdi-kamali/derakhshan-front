"use client";

import { useState } from "react";
import PageContainer from "@/components/containers/PageContainer/PageContainer";
import Button from "@/components/UI/Button/Button";
import styles from "./styles.module.scss";
import Input from "@/components/UI/Input/Input";

const formSteps = [
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
    inputs: [
      { title: "رشته تحصیلی", type: "text", key: "eduField" },
      { title: "مقطع تحصیلی", type: "text", key: "eduLevel" },
      { title: "معدل", type: "number", key: "gpa" },
      { title: "نام موسسه آموزش", type: "text", key: "eduCenter" },
    ],
  },
  {
    name: " سوابق کاری و تجربی",
    inputs: [
      { title: "سازمان", type: "text", key: "workCompany" },
      { title: "زمینه همکاری", type: "text", key: "workField" },
      { title: "مدت همکاری", type: "text", key: "workDuration" },
      { title: "علت قطع همکاری", type: "text", key: "workReason" },
      { title: "آخرین حقوق دریافتی", type: "text", key: "lastSalary" },
      { title: "مدت زمان بیمه", type: "text", key: "workReason" },
      {
        title: "بیمه بیکاری استفاده کرده اید؟",
        type: "text",
        key: "workReason",
      },
    ],
  },
  {
    name: "مهارت ها",
    inputs: [
      {
        title: "مهارت",
        type: "select-type",
        options: [
          { value: "حسابداری", name: "حسابداری" },
          { value: "گرافیست", name: "گرافیست" },
        ],

        key: "skillType",
      },
      {
        title: "میزان تسلط",
        type: "select",
        options: [
          { value: "مبتدی", name: "مبتدی" },
          { value: "متوسط", name: "متوسط" },
          { value: "خوب", name: "خوب" },
          { value: "حرفه‌ای", name: "حرفه‌ای" },
        ],
        key: "level",
      },
    ],
  },
  {
    name: "نرم افزار",
    inputs: [
      {
        title: "نرم افزار",
        type: "select-type",
        options: [
          { value: "حسابداری", name: "حسابداری" },
          { value: "گرافیست", name: "گرافیست" },
        ],

        key: "skillType",
      },
      {
        title: "میزان تسلط",
        type: "select",
        options: [
          { value: "مبتدی", name: "مبتدی" },
          { value: "متوسط", name: "متوسط" },
          { value: "خوب", name: "خوب" },
          { value: "حرفه‌ای", name: "حرفه‌ای" },
        ],
        key: "level",
      },
    ],
  },
  {
    name: "زبان های خارجی",
    inputs: [
      {
        title: "زبان",
        type: "select-type",
        options: [
          { value: "حسابداری", name: "حسابداری" },
          { value: "گرافیست", name: "گرافیست" },
        ],

        key: "skillType",
      },
      {
        title: "میزان تسلط",
        type: "select",
        options: [
          { value: "مبتدی", name: "مبتدی" },
          { value: "متوسط", name: "متوسط" },
          { value: "خوب", name: "خوب" },
          { value: "حرفه‌ای", name: "حرفه‌ای" },
        ],
        key: "level",
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

type SkillItem = {
  skillType: string;
  level: string;
};
const Form = () => {
  const [formData, setFormData] = useState<FormData>({});
  const [currentStep, setCurrentStep] = useState(0);
  const [isStepValid, setIsStepValid] = useState(true);

  // Multi-entry step data
  const [tempItem, setTempItem] = useState<Partial<SkillItem>>({});
  const [skills, setSkills] = useState<SkillItem[]>([]);
  const [softwares, setSoftwares] = useState<SkillItem[]>([]);
  const [languages, setLanguages] = useState<SkillItem[]>([]);

  // Handle regular input change
  const handleChange = (key: string, value: string | number | File) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Handle multi-entry input change
  const handleTempChange = (key: keyof SkillItem, value: string) => {
    setTempItem((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Add tempItem to the correct list
  const addTempItem = () => {
    const item: SkillItem = {
      skillType: tempItem.skillType || "",
      level: tempItem.level || "",
    };

    if (!item.skillType || !item.level) return;

    if (currentStep === 3) setSkills((prev) => [...prev, item]);
    else if (currentStep === 4) setSoftwares((prev) => [...prev, item]);
    else if (currentStep === 5) setLanguages((prev) => [...prev, item]);

    setTempItem({});
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

  // Determine if current step is one of the multi-entry ones
  const isMultiEntryStep =
    currentStep === 3 || currentStep === 4 || currentStep === 5;

  const currentMultiList =
    currentStep === 3 ? skills : currentStep === 4 ? softwares : languages;

  return (
    <PageContainer title="فرم استخدام">
      <div className={styles.form}>
        {/* Step navigation */}
        <div className={styles.labels}>
          {formSteps.map((step, index) => (
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

        {/* Main input area */}
        <div className={`${styles.middle} ${formStepsStyles[currentStep]}`}>
          <div className={styles.contents}>
            {isMultiEntryStep ? (
              <>
                {/* Inputs for multi-entry */}
                {formSteps[currentStep].inputs.map((input, index) => (
                  <div key={index} className={styles.Input}>
                    <p>{input.title}</p>
                    <Input
                      type={input.type}
                      value={tempItem[input.key as keyof SkillItem] || ""}
                      onChange={(val: string) =>
                        handleTempChange(input.key as keyof SkillItem, val)
                      }
                      options={input.options}
                    />
                  </div>
                ))}

                {/* Add item button */}
                <Button
                  title="اضافه کردن"
                  icon="ic:baseline-plus"
                  variant="primary"
                  onClick={addTempItem}
                  disabled={!tempItem.skillType || !tempItem.level}
                />
              </>
            ) : (
              // Regular inputs
              formSteps[currentStep].inputs.map((input, index) => (
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
              ))
            )}
          </div>
        </div>

        {/* List of added items */}
        {isMultiEntryStep && (
          <div className={styles.list}>
            {currentMultiList.map((item, i) => (
              <div key={i} className={styles.listItem}>
                <p>
                  {item.skillType} - {item.level}
                </p>
              </div>
            ))}
          </div>
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

          {currentStep < formSteps.length - 1 ? (
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
