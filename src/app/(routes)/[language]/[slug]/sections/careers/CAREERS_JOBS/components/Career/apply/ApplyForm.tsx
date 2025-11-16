import styles from "./styles.module.scss";
import { ReactElement, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { ApplyToCareerAPI } from "@/services/Careers/careers.services";
import Groups from "./Groups/Groups";
import { IField } from "@/components/UI/Fields/Field.types";
import Button from "@/components/UI/Button/Button";
import { ICareerApply } from "@/types/careers.types";
import { FormikProvider, useFormik } from "formik";
import { ShowQuestion } from "@/utils/toast/Toast";
import * as Yup from "yup";
import { CareerApplySchema } from "@/utils/validations/validations";
import { useParams } from "next/navigation";
import { LanguagesENUM } from "@/types/Language/Language.types";

export interface IGroupField<T> {
  title: string;
  name: keyof T;
  icon: ReactElement;
  fields: IField[];
  info: {
    title: string;
    description: string;
    animation: ReactElement;
  };
}

interface IProps {
  onFlip: () => void;
  career_id: string;
}

export default function ApplyForm(props: IProps) {
  const { language }: { language: LanguagesENUM } = useParams();

  const { onFlip, career_id } = props;

  const { mutate: ApplyCareer } = useMutation({
    mutationFn: ApplyToCareerAPI,
    onSuccess(data, variables, onMutateResult, context) {
      onFlip();
    },
  });

  const formik = useFormik<ICareerApply>({
    initialValues: {
      career_id: props.career_id,
      personalInfo: {
        fullName: "",
        nationalId: "",
        birthDate: "",
        birthPlace: "",
        issuePlace: "",
        maritalStatus: "",
        militaryStatus: "",
        fatherName: "",
        fatherJob: "",
        insuranceHistory: "",
        phoneNumber: "",
      },
      education: [
        {
          fieldOfStudy: "",
          gpa: "",
          institute: "",
          level: "",
        },
      ],
      workExperience: {
        lastSalary: "",
        insuranceDuration: "",
        usedUnemploymentInsurance: "",
        works: [
          {
            duration: "",
            organization: "",
            role: "",
            terminationReason: "",
          },
        ],
      },
      skills: [],
      software: [],
      languages: [],
      description: "",
      expectedSalary: "",
      uploads: {
        organization: undefined as any,
        resume: undefined as any,
      },
    },
    onSubmit(values, formikHelpers) {
      ShowQuestion({
        onConfirm() {
          ApplyCareer(values);
        },
        onCancel() {},
      });
    },
    validationSchema: CareerApplySchema[language],
    validateOnChange: false,
    validateOnBlur: true,
  });

  const { values, errors, submitForm } = formik;

  return (
    <form className={styles.form}>
      <FormikProvider value={formik}>
        <Groups formik={formik} />
        <div className={styles.actions}>
          <Button
            variant='success'
            title='ثبت و ارسال'
            icon=''
            fill='fill'
            onClick={() => {
              submitForm();
            }}
          />
        </div>
      </FormikProvider>
    </form>
  );
}
