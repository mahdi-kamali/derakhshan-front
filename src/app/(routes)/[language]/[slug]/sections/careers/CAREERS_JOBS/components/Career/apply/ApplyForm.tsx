import Field from "@/components/UI/Fields/Field";
import { IField } from "@/components/UI/Fields/Text/Text";
import { LanguagesENUM } from "@/types/Language/Language.types";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useParams } from "next/navigation";
import styles from "./styles.module.scss";
import Button from "@/components/UI/Button/Button";
import { useState } from "react";
import AplyAnimation from "@/assets/animations/apply";
import { useFormik } from "formik";
import { ICareer, ICareerApply } from "@/types/careers.types";
import { useMutation } from "@tanstack/react-query";
import { ApplyToCareerAPI } from "@/services/Careers/careers.services";
import { ShowQuestion } from "@/utils/toast/Toast";

interface IProps {
  onFlip: () => void;
  career_id: string;
}

export default function ApplyForm(props: IProps) {
  const { onFlip, career_id } = props;
  const { language }: { language: LanguagesENUM } = useParams();

  const [color, setColor] = useState("black");

  const formik = useFormik<ICareerApply>({
    initialValues: {
      address: "",
      career_id: career_id,
      description: "",
      family: "",
      name: "",
      phone: "",
    },
    onSubmit(values, formikHelpers) {},
  });

  const { values, setFieldValue, handleChange, submitForm } = formik;

  const fields: IField[] = [
    {
      name: "name",
      icon: <Icon icon='icon-park-solid:edit-name' />,
      onChange(value) {
        setFieldValue("name", value);
      },
      title: "نام شما",
      rtl: language === LanguagesENUM.FA ? true : false,
      type: "text",
      required: true,
      color: color,
      value: values.name,
    },
    {
      name: "family",
      icon: <Icon icon='icon-park-solid:family' />,
      onChange(value) {
        setFieldValue("family", value);
      },
      title: "فامیلی شما",
      rtl: language === LanguagesENUM.FA ? true : false,
      type: "text",
      required: true,
      color: color,
      value: values.family,
    },
    {
      name: "phone",
      icon: <Icon icon='line-md:phone-filled' />,
      onChange(value) {
        setFieldValue("phone", value);
      },
      title: "تلفن همراه",
      rtl: language === LanguagesENUM.FA ? true : false,
      type: "tel",
      required: true,
      color: color,
      value: values.phone,
    },
    {
      name: "address",
      icon: <Icon icon='mdi:address-marker' />,
      onChange(value) {
        setFieldValue("address", value);
      },
      title: "آدرس محل سکونت",
      rtl: language === LanguagesENUM.FA ? true : false,
      type: "text",
      required: true,
      color: color,
      value: values.address,
      multiLine: {
        cols: 2,
        rows: 2,
      },
    },
    {
      name: "description",
      icon: <Icon icon='streamline-plump:description-solid' />,
      onChange(value) {
        setFieldValue("description", value);
      },
      title: "راجب خودتان بگویید",
      rtl: language === LanguagesENUM.FA ? true : false,
      type: "text",
      required: true,
      color: color,
      value: values.description,
      multiLine: {
        cols: 4,
        rows: 4,
      },
    },
  ];

  const { mutate: ApplyCareer } = useMutation({
    mutationFn: ApplyToCareerAPI,
    onSuccess(data, variables, onMutateResult, context) {
      onFlip()
    },
  });

  return (
    <form className={styles.form}>
      <div className={styles.left}>
        <div className={styles.animation}>
          <AplyAnimation />
        </div>
        <div className={styles.info}>
          <h2>ارسال درخواست همکاری</h2>
          <p>
            لطفاً اطلاعات خود را با دقت وارد کنید تا تیم ما بتواند در صورت
            تأیید، با شما تماس بگیرد. شما می‌توانید توضیحاتی درباره‌ی مهارت‌ها،
            سوابق کاری و انگیزه‌ی خود برای پیوستن به مجموعه نیز اضافه کنید.
          </p>
        </div>
      </div>
      <div className={styles.right}>
        {fields.map((field) => {
          return (
            <Field.Text
              {...field}
              key={field.name}
            />
          );
        })}
        <div className={styles.actions}>
          <Button
            title='ثبت و ارسال'
            icon='formkit:submit'
            variant='success'
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
          <Button
            title='لغو ارسال'
            icon='line-md:cancel'
            variant='danger'
            fill='fill'
            onClick={() => onFlip()}
          />
        </div>
      </div>
    </form>
  );
}
