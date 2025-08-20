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
        title: "Military Status",
        type: "select",
        key: "militaryStatus",
        options: [
          { value: "Permanent Exemption", name: "Permanent Exemption" },
          { value: "Temporary Exemption", name: "Temporary Exemption" },
          { value: "Completed Service", name: "Completed Service" },
          { value: "Studying", name: "Studying" },
        ],
      },
      { title: "Father's Name", type: "text", key: "fatherName" },
      { title: "Father's Occupation", type: "text", key: "fatherJob" },
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
    fields: [
      {
        title: "Field of Study",
        type: "select-type",
        key: "field",
        options: [
          { value: "Accounting", name: "Accounting" },
          { value: "Graphic Design", name: "Graphic Design" },
        ],
      },
      {
        title: "Education Level",
        type: "select",
        key: "level",
        options: [
          { value: "Beginner", name: "Beginner" },
          { value: "Intermediate", name: "Intermediate" },
          { value: "Good", name: "Good" },
          { value: "Professional", name: "Professional" },
        ],
      },
      { title: "GPA", type: "number", key: "gpa" },
      { title: "Educational Institute Name", type: "text", key: "university" },
    ],
  },
  {
    name: "Work and Experience History",
    inputs: [
      { title: "Last Received Salary", type: "text", key: "lastSalary" },
      { title: "Insurance Duration", type: "text", key: "insuranceDuration" },
      {
        title: "Have you used Unemployment Insurance?",
        type: "text",
        key: "unemploymentInsurance",
      },
    ],
    fields: [
      { title: "Organization", type: "text", key: "workCompany" },
      { title: "Field of Cooperation", type: "text", key: "workField" },
      { title: "Duration of Cooperation", type: "text", key: "workDuration" },
      { title: "Reason for Termination", type: "text", key: "workReason" },
    ],
  },
  {
    name: "Skills",
    fields: [
      {
        title: "Skill",
        type: "select-type",
        key: "skillType",
        options: [
          { value: "Accounting", name: "Accounting" },
          { value: "Graphic Design", name: "Graphic Design" },
        ],
      },
      {
        title: "Proficiency Level",
        type: "select",
        key: "level",
        options: [
          { value: "Beginner", name: "Beginner" },
          { value: "Intermediate", name: "Intermediate" },
          { value: "Good", name: "Good" },
          { value: "Professional", name: "Professional" },
        ],
      },
    ],
  },
  {
    name: "Software",
    fields: [
      {
        title: "Software",
        type: "select-type",
        key: "software",
        options: [
          { value: "Accounting", name: "Accounting" },
          { value: "Graphic Design", name: "Graphic Design" },
        ],
      },
      {
        title: "Proficiency Level",
        type: "select",
        key: "softwareLevel",
        options: [
          { value: "Beginner", name: "Beginner" },
          { value: "Intermediate", name: "Intermediate" },
          { value: "Good", name: "Good" },
          { value: "Professional", name: "Professional" },
        ],
      },
    ],
  },
  {
    name: "Foreign Languages",
    fields: [
      {
        title: "Language",
        type: "select-type",
        key: "language",
        options: [
          { value: "English", name: "English" },
          { value: "French", name: "French" },
        ],
      },
      {
        title: "Proficiency Level",
        type: "select",
        key: "languageLevel",
        options: [
          { value: "Beginner", name: "Beginner" },
          { value: "Intermediate", name: "Intermediate" },
          { value: "Good", name: "Good" },
          { value: "Professional", name: "Professional" },
        ],
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
    <PageContainer title="Job Form">
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

          {currentStep < steps.length - 1 ? (
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
