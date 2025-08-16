"use client";

import { useState } from "react";
import useSettings from "@/hooks/useSettings";
import PageContainer from "@/components/containers/PageContainer/PageContainer";
import Button from "@/components/UI/Button/Button";
import styles from "./styles.module.scss";
import Input from "@/components/UI/Input/Input";

const formSteps = [
  {
    name: "Personal Information",
    inputs: [
      { title: "Full Name", type: "text", key: "fullName" },
      { title: "National ID", type: "text", key: "nationalId" },
      { title: "Date of Birth", type: "date", key: "birthDate" },
      { title: "Place of Birth", type: "text", key: "birthPlace" },
      { title: "Place of Issue", type: "text", key: "issuePlace" },
      {
        title: "Marital Status",
        type: "select",
        key: "maritalStatus",
        options: [
          { value: "Single", name: "Single" },
          { value: "Married", name: "Married" },
        ],
      },
      {
        title: "Military Service Status",
        type: "select",
        key: "militaryStatus",
        options: [
          { value: "Permanent Exemption", name: "Permanent Exemption" },
          { value: "Temporary Exemption", name: "Temporary Exemption" },
          { value: "Completed Service", name: "Completed Service" },
          { value: "Currently Studying", name: "Currently Studying" },
        ],
      },
      { title: "Father's Name", type: "text", key: "fatherName" },
      { title: "Father's Job", type: "text", key: "fatherJob" },
      {
        title: "Insurance Payment History",
        type: "text",
        key: "insuranceHistory",
      },
      { title: "Address", type: "text", key: "address" },
      { title: "Phone Number", type: "text", key: "phone" },
    ],
  },
  {
    name: "Educational Background",
    inputs: [
      { title: "Field of Study", type: "text", key: "eduField" },
      { title: "Education Level", type: "text", key: "eduLevel" },
      { title: "GPA", type: "number", key: "gpa" },
      { title: "Educational Institution Name", type: "text", key: "eduCenter" },
    ],
  },
  {
    name: "Work and Experience History",
    inputs: [
      { title: "Organization", type: "text", key: "workCompany" },
      { title: "Field of Work", type: "text", key: "workField" },
      { title: "Duration of Employment", type: "text", key: "workDuration" },
      { title: "Reason for Leaving", type: "text", key: "workReason" },
      { title: "Last Received Salary", type: "text", key: "lastSalary" },
      { title: "Insurance Duration", type: "text", key: "insuranceDuration" },
      {
        title: "Have you used Unemployment Insurance?",
        type: "text",
        key: "unemploymentInsurance",
      },
    ],
  },
  {
    name: "Skills",
    inputs: [
      {
        title: "Skill",
        type: "select-type",
        options: [
          { value: "Accounting", name: "Accounting" },
          { value: "Graphic Designer", name: "Graphic Designer" },
        ],
        key: "skillType",
      },
      {
        title: "Proficiency Level",
        type: "select",
        options: [
          { value: "Beginner", name: "Beginner" },
          { value: "Intermediate", name: "Intermediate" },
          { value: "Good", name: "Good" },
          { value: "Professional", name: "Professional" },
        ],
        key: "level",
      },
    ],
  },
  {
    name: "Software",
    inputs: [
      {
        title: "Software",
        type: "select-type",
        options: [
          { value: "Accounting", name: "Accounting" },
          { value: "Graphic Designer", name: "Graphic Designer" },
        ],
        key: "skillType",
      },
      {
        title: "Proficiency Level",
        type: "select",
        options: [
          { value: "Beginner", name: "Beginner" },
          { value: "Intermediate", name: "Intermediate" },
          { value: "Good", name: "Good" },
          { value: "Professional", name: "Professional" },
        ],
        key: "level",
      },
    ],
  },
  {
    name: "Foreign Languages",
    inputs: [
      {
        title: "Language",
        type: "select-type",
        options: [
          { value: "English", name: "English" },
          { value: "French", name: "French" },
        ],
        key: "skillType",
      },
      {
        title: "Proficiency Level",
        type: "select",
        options: [
          { value: "Beginner", name: "Beginner" },
          { value: "Intermediate", name: "Intermediate" },
          { value: "Good", name: "Good" },
          { value: "Professional", name: "Professional" },
        ],
        key: "level",
      },
    ],
  },
  {
    name: "Upload Resume",
    inputs: [
      { title: "Upload Resume", type: "file", key: "resumeFile" },
      { title: "Upload Organizational Photo", type: "file", key: "orgPhoto" },
      { title: "Description", type: "text", key: "resumeDescription" },
      { title: "Expected Salary", type: "text", key: "expectedSalary" },
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
  const { language } = useSettings();

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
    <PageContainer title="Job Form">
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
                  title={language == "en" ? "add" : "اضافه کردن"}
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
            title="Previous"
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
              title="Next"
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
              title="Submit"
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
