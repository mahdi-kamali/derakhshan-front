import styles from "./styles.module.scss";
import { ReactElement, useEffect, useMemo, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { ApplyToCareerAPI } from "@/services/Careers/careers.services";
import Forms, { IGroupProps } from "./Forms/Forms";
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
import useCaptcha from "@/components/ReCaptcha/useCaptcha";

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
  const { setShowModal, showModal } = props;

  const { language }: { language: LanguagesENUM } = useParams();

  const { mutate: ApplyCareer } = useMutation({
    mutationFn: ApplyToCareerAPI,
    onSuccess(data, variables, onMutateResult, context) {},
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

  const { submitForm, errors, values } = formik;

  const [step, setStep] = useState<number>(0);

  const goToForm = async (field: keyof typeof values) => {
    try {
      const res = await (
        CareerApplySchema[language].fields[field] as any
      ).validate(values[field], {
        recursive: true,
        abortEarly: false,
        disableStackTrace: false,
      });

      setStep((prev) => prev + 1);

      return null;
    } catch (err: any) {
      formik.submitForm();
    }
  };

  const { ReCaptcha, SolveCaptcha, isSolved, isCaptchaVisible } = useCaptcha();
  const memoFooter = useMemo(
    () => (
      <div>
        <ReCaptcha />
        <StepperSection
          setStep={(newStep) => {}}
          step={step}
        />
      </div>
    ),
    [step, isCaptchaVisible],
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
                    if (!isSolved) {
                      SolveCaptcha();
                      ShowError("لطفا کپچارا تکمیل کنید.");
                    } else submitForm();
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
