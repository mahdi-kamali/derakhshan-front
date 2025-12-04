import styles from "./styles.module.scss";
import { ReactElement, useEffect, useMemo, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { ApplyToCareerAPI } from "@/services/Careers/careers.services";
import Forms from "./Forms/Forms";
import { IField } from "@/components/UI/Fields/Field.types";
import { ICareerApply } from "@/types/careers.types";
import { FormikProvider, useFormik } from "formik";
import { ShowError, ShowQuestion } from "@/utils/toast/Toast";
import { CareerApplySchema } from "@/utils/validations/validations";
import { useParams } from "next/navigation";
import { LanguagesENUM } from "@/types/Language/Language.types";
import Modal from "@/components/UI/Modal/Modal";
import "@progress/kendo-theme-default/dist/all.css";
import StepperSection from "./Stepper/StepperSection";
import useCaptcha from "@/hooks/useCaptcha";

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
  career_id: string;
  setShowModal: (show: boolean) => void;
  showModal: boolean;
}

export default function ApplyForm(props: IProps) {
  const { SolveCaptcha, isSolving } = useCaptcha();

  const { setShowModal, showModal } = props;

  const { language }: { language: LanguagesENUM } = useParams();

  const { mutate: ApplyCareer } = useMutation({
    mutationFn: ApplyToCareerAPI,
    onSuccess(data, variables, onMutateResult, context) {},
  });

  const initialValues = {
    career_id: "12345",
    personalInfo: {
      fullName: "مهدی کمالی",
      nationalId: "0012345678",
      birthDate: "1375/05/12",
      birthPlace: "تهران",
      issuePlace: "تهران",
      maritalStatus: "مجرد",
      militaryStatus: "انجام شده",
      fatherName: "علی کمالی",
      fatherJob: "معلم",
      insuranceHistory: "5 سال بیمه تامین اجتماعی",
      phoneNumber: "09123456789",
      gender: "مرد",
    },
    education: [
      {
        fieldOfStudy: "مهندسی نرم‌افزار",
        gpa: "18.5",
        institute: "دانشگاه صنعتی شریف",
        level: "کارشناسی",
      },
    ],
    workExperience: {
      lastSalary: "15,000,000",
      insuranceDuration: "3 سال",
      usedUnemploymentInsurance: "خیر",
      works: [
        {
          duration: "2 سال",
          organization: "شرکت فناوران",
          role: "توسعه‌دهنده وب",
          terminationReason: "پایان قرارداد",
        },
      ],
    },
    skills: [
      {
        level: "متوسط",
        name: "برنامه‌نویسی جاوااسکریپت",
      },
    ],
    software: [
      {
        level: "پیشرفته",
        name: "Photoshop",
      },
    ],
    languages: [
      {
        level: "مسلط",
        name: "انگلیسی",
      },
    ],
    description: "علاقه‌مند به توسعه وب و کار با فریم‌ورک‌های مدرن.",
    expectedSalary: "20,000,000",
    uploads: {
      organization: undefined,
      resume: undefined,
    },
  };

  const tempData: ICareerApply = {
    career_id: props.career_id,
    personalInfo: {
      fullName: "مهدی",
      nationalId: "1362958204",
      birthDate: "۱۴۰۴/۰۹/۱۳",
      birthPlace: "تبریز",
      issuePlace: "تبریز",
      maritalStatus: "single",
      militaryStatus: "completed",
      fatherName: "یوسف",
      fatherJob: "برنامه نویس",
      insuranceHistory: "false",
      phoneNumber: "09374905487",
      gender: "male",
    },
    education: [
      {
        fieldOfStudy: "مهندسی نرم‌افزار",
        gpa: "20",
        institute: "دانشگاه صنعتی شریف",
        level: "bachelor",
      },
    ],
    workExperience: {
      lastSalary: "250000000",
      insuranceDuration: "12",
      usedUnemploymentInsurance: "yes",
      works: [
        {
          duration: "12",
          organization: "آلدی",
          role: "برنامه نویسی",
          terminationReason: "کمبود وقت",
        },
      ],
    },
    skills: [
      {
        level: "VERY_HIGH",
        name: "برنامه نویسی",
      },
    ],
    software: [
      {
        level: "VERY_HIGH",
        name: "Vs Code",
      },
    ],
    languages: [
      {
        level: "VERY_HIGH",
        name: "انگلیسی",
      },
    ],
    description: "این یک متن تستی است از سمت کاربر",
    expectedSalary: "2555555",
    uploads: {
      organization: undefined as any,
      resume: undefined as any,
    },
  };

  const emptyData: ICareerApply = {
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
      gender: "",
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
    skills: [
      {
        level: "",
        name: "",
      },
    ],
    software: [
      {
        level: "",
        name: "",
      },
    ],
    languages: [
      {
        level: "",
        name: "",
      },
    ],
    description: "",
    expectedSalary: "",
    uploads: {
      organization: undefined as any,
      resume: undefined as any,
    },
  };

  const formik = useFormik<ICareerApply>({
    initialValues: emptyData,
    onSubmit(values, formikHelpers) {
      SolveCaptcha({
        onSuccess(token) {
          ApplyCareer(values);
        },
        onFail() {
          ShowError("لطفا کپچارا حل کنید");
        },
      });
    },
    validationSchema: CareerApplySchema[language],
    validateOnChange: false,
    validateOnBlur: true,
  });

  const { submitForm, errors, values } = formik;

  const [step, setStep] = useState<number>(0);

  const goToForm = async (field: keyof typeof values) => {
    try {
      const fieldSchema = CareerApplySchema[language].fields[field] as any;

      if (fieldSchema) {
        const res = await fieldSchema.validate(values[field], {
          recursive: true,
          abortEarly: false,
          disableStackTrace: false,
        });
      }

      setStep((prev) => prev + 1);

      return null;
    } catch (err: any) {
      formik.validateForm();
    }
  };

  const memoFooter = useMemo(
    () => (
      <StepperSection
        setStep={(newStep) => {}}
        step={step}
      />
    ),
    [step],
  );
  useEffect(() => {
    formik.setErrors({});
  }, [step]);

  return (
    <Modal
      onClose={() => setShowModal(false)}
      show={showModal}>
      {() => {
        return {
          ACTIONS: [
            step !== 6
              ? {
                  title: "مرحله بعد",
                  icon: "icon-park-solid:right-c",
                  variant: "warning",
                  onClick: async () => {
                    switch (step) {
                      case 0: {
                        goToForm("personalInfo");
                        return;
                      }
                      case 1: {
                        goToForm("education");
                        return;
                      }
                      case 2: {
                        goToForm("workExperience");
                        return;
                      }
                      case 3: {
                        goToForm("skills");
                        return;
                      }
                      case 4: {
                        goToForm("software");
                        return;
                      }
                      case 5: {
                        goToForm("languages");
                        return;
                      }
                    }
                  },
                }
              : {
                  title: "ثبت و ارسال",
                  icon: "fluent-mdl2:accept-medium",
                  variant: "success",
                  fill: "fill",
                  onClick() {
                    ShowQuestion({
                      onConfirm() {
                        submitForm();
                      },
                      onCancel() {},
                    });
                  },
                },
            {
              title: "مرحله قبل",
              icon: "icon-park-solid:left-c",
              variant: "primary",
              style: {
                display: "flex",
                flexDirection: "row-reverse",
              },
              onClick() {
                setStep((prev) => {
                  switch (prev) {
                    case 1:
                      return 0;
                    case 2:
                      return 1;
                    case 3:
                      return 2;
                    case 4:
                      return 3;
                    case 5:
                      return 4;
                    case 6:
                      return 5;
                    default:
                      return 0;
                  }
                });
              },
            },
          ],
          BODY: (
            <form className={styles.form}>
              <FormikProvider value={formik}>
                <Forms
                  formik={formik}
                  step={step}
                />
              </FormikProvider>
            </form>
          ),
          FOOTER: memoFooter,
        };
      }}
    </Modal>
  );
}
