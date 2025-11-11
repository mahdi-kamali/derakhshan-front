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
  career_id: Yup.string().required("شناسه شغل الزامی است"),

  personalInfo: Yup.object({
    fullName: Yup.string().required("نام و نام خانوادگی الزامی است"),
    nationalId: Yup.string()
      .matches(/^\d{10}$/, "کد ملی باید 10 رقم باشد")
      .required("کد ملی الزامی است"),
    birthDate: Yup.string().required("تاریخ تولد الزامی است"),
    birthPlace: Yup.string().required("محل تولد الزامی است"),
    issuePlace: Yup.string().required("محل صدور الزامی است"),
    maritalStatus: Yup.string().required("وضعیت تأهل الزامی است"),
    militaryStatus: Yup.string().required("وضعیت نظام وظیفه الزامی است"),
    fatherName: Yup.string().required("نام پدر الزامی است"),
    fatherJob: Yup.string().required("شغل پدر الزامی است"),
    insuranceHistory: Yup.string().required("سوابق بیمه الزامی است"),
    phoneNumber: Yup.string()
      .matches(/^09\d{9}$/, "شماره موبایل باید معتبر باشد")
      .required("شماره موبایل الزامی است"),
  }),

  education: Yup.array()
    .of(
      Yup.object({
        fieldOfStudy: Yup.string().required("رشته تحصیلی الزامی است"),
        level: Yup.string().required("مقطع تحصیلی الزامی است"),
        gpa: Yup.string().required("معدل الزامی است"),
        institute: Yup.string().required("نام مؤسسه یا دانشگاه الزامی است"),
      }),
    )
    .min(1, "حداقل یک مدرک تحصیلی باید وارد شود"),

  workExperience: Yup.object({
    lastSalary: Yup.string().required("آخرین حقوق الزامی است"),
    insuranceDuration: Yup.string().required("مدت بیمه الزامی است"),
    usedUnemploymentInsurance: Yup.string().required(
      "استفاده از بیمه بیکاری الزامی است",
    ),
    works: Yup.array()
      .of(
        Yup.object({
          organization: Yup.string().required("نام سازمان الزامی است"),
          role: Yup.string().required("سمت شغلی الزامی است"),
          duration: Yup.string().required("مدت اشتغال الزامی است"),
          terminationReason: Yup.string().required("علت ترک کار الزامی است"),
        }),
      )
      .min(1, "حداقل یک سابقه کاری باید وارد شود"),
  }),

  skills: Yup.array()
    .of(
      Yup.object({
        name: Yup.string().required("نام مهارت الزامی است"),
        level: Yup.string().required("سطح مهارت الزامی است"),
      }),
    )
    .min(1, "حداقل یک مهارت باید وارد شود"),

  software: Yup.array()
    .of(
      Yup.object({
        name: Yup.string().required("نام نرم‌افزار الزامی است"),
        level: Yup.string().required("سطح تسلط الزامی است"),
      }),
    )
    .min(1, "حداقل یک نرم‌افزار باید وارد شود"),

  languages: Yup.array()
    .of(
      Yup.object({
        name: Yup.string().required("نام زبان الزامی است"),
        level: Yup.string().required("سطح زبان الزامی است"),
      }),
    )
    .min(1, "حداقل یک زبان باید وارد شود"),

  description: Yup.string()
    .max(1000, "توضیحات نباید بیش از 1000 کاراکتر باشد")
    .required("توضیحات الزامی است"),

  expectedSalary: Yup.string().required("حقوق مورد انتظار الزامی است"),
});

export interface IGroupField {
  title: string;
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
    },
    onSubmit(values, formikHelpers) {},
    validationSchema: CareerApplySchema,
  });

  const { values, errors } = formik;

  return (
    <form className={styles.form}>
      <Groups formik={formik} />
      <div className={styles.actions}>
        <Button
          variant='success'
          title='ثبت و ارسال'
          icon=''
          fill='fill'
          onClick={() => {
            ShowQuestion({
              onConfirm() {
                ApplyCareer(values);
              },
              onCancel() {},
            });
          }}
        />
      </div>
    </form>
  );
}
