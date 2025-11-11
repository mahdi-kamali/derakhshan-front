import styles from "./styles.module.scss";
import { ReactElement, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { ApplyToCareerAPI } from "@/services/Careers/careers.services";
import Groups from "./Groups/Groups";
import { IField } from "@/components/UI/Fields/Field.types";
import Button from "@/components/UI/Button/Button";
import { ICareerApply } from "@/types/careers.types";
import { useFormik } from "formik";
import { ShowQuestion } from "@/utils/toast/Toast";
import * as Yup from "yup";

export const CareerApplySchema = Yup.object({
  career_id: Yup.string().required("الزامی است"),

  personalInfo: Yup.object({
    fullName: Yup.string().required("الزامی است"),
    nationalId: Yup.string()
      .matches(/^\d{10}$/, "معتبر نیست")
      .required("الزامی است"),
    birthDate: Yup.string().required("الزامی است"),
    birthPlace: Yup.string().required("الزامی است"),
    issuePlace: Yup.string().required("الزامی است"),
    maritalStatus: Yup.string().required("الزامی است"),
    militaryStatus: Yup.string().required("الزامی است"),
    fatherName: Yup.string().required("الزامی است"),
    fatherJob: Yup.string().required("الزامی است"),
    insuranceHistory: Yup.string().required("الزامی است"),
    phoneNumber: Yup.string()
      .matches(/^09\d{9}$/, "معتبر نیست")
      .required("الزامی است"),
  }),

  education: Yup.array()
    .of(
      Yup.object({
        fieldOfStudy: Yup.string().required("الزامی است"),
        level: Yup.string().required("الزامی است"),
        gpa: Yup.string().required("الزامی است"),
        institute: Yup.string().required("الزامی است"),
      }),
    )
    .min(1, "حداقل یک مدرک تحصیلی باید وارد شود"), // group-level info

  workExperience: Yup.object({
    lastSalary: Yup.string().required("الزامی است"),
    insuranceDuration: Yup.string().required("الزامی است"),
    usedUnemploymentInsurance: Yup.string().required("الزامی است"),
    works: Yup.array()
      .of(
        Yup.object({
          organization: Yup.string().required("الزامی است"),
          role: Yup.string().required("الزامی است"),
          duration: Yup.string().required("الزامی است"),
          terminationReason: Yup.string().required("الزامی است"),
        }),
      )
      .min(1, "حداقل یک سابقه کاری باید وارد شود"), // group-level info
  }).required("اطلاعات سوابق کاری الزامی است"), // object group required

  skills: Yup.array()
    .of(
      Yup.object({
        name: Yup.string().required("الزامی است"),
        level: Yup.string().required("الزامی است"),
      }),
    )
    .min(1, "حداقل یک مهارت باید وارد شود"),

  software: Yup.array()
    .of(
      Yup.object({
        name: Yup.string().required("الزامی است"),
        level: Yup.string().required("الزامی است"),
      }),
    )
    .min(1, "حداقل یک نرم‌افزار باید وارد شود"),

  languages: Yup.array()
    .of(
      Yup.object({
        name: Yup.string().required("الزامی است"),
        level: Yup.string().required("الزامی است"),
      }),
    )
    .min(1, "حداقل یک زبان باید وارد شود"),

  description: Yup.string()
    .max(1000, "توضیحات نباید بیش از 1000 کاراکتر باشد")
    .required("الزامی است"),

  expectedSalary: Yup.string().required("الزامی است"),
});

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
      education: [],
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
    validationSchema: CareerApplySchema,
  });

  const { values, errors, submitForm } = formik;

  return (
    <form className={styles.form}>
      <Groups formik={formik} />
      <div className={styles.actions}>
        <Button
          variant='success'
          title='ثبت و ارسال'
          icon=''
          fill='fill'
          disabled={Object.entries(errors).length > 0}
          onClick={() => {
            submitForm();
          }}
        />
      </div>
    </form>
  );
}
