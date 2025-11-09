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

interface IGroupField {
  title: string;
  fields: IField[];
}

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

  const groups: IGroupField[] = [
    {
      title:
        language === LanguagesENUM.FA ? "مشخصات فردی" : "Personal Information",
      fields: [
        {
          icon: <Icon icon='mdi:account' />,
          title: "نام و نام خانوادگی",
          required: true,
          name: "fullName",
          type: "text",
          onChange: (value) => console.log("Full Name:", value),
          rtl: true,
        },
        {
          icon: <Icon icon='mdi:card-account-details' />,
          title: "کد ملی",
          required: true,
          name: "nationalId",
          type: "text",
          onChange: (value) => console.log("National ID:", value),
          rtl: true,
        },
        {
          icon: <Icon icon='mdi:cake-variant' />,
          title: "تاریخ تولد",
          required: true,
          name: "birthDate",
          type: "date",
          onChange: (value) => console.log("Birth Date:", value),
          rtl: true,
        },
        {
          icon: <Icon icon='mdi:map-marker' />,
          title: "محل تولد",
          required: true,
          name: "birthPlace",
          type: "text",
          onChange: (value) => console.log("Birth Place:", value),
          rtl: true,
        },
        {
          icon: <Icon icon='mdi:map-marker-outline' />,
          title: "محل صدور",
          required: true,
          name: "issuePlace",
          type: "text",
          onChange: (value) => console.log("Issue Place:", value),
          rtl: true,
        },
        {
          icon: <Icon icon='mdi:heart' />,
          title: "وضعیت تاهل",
          required: false,
          name: "maritalStatus",
          type: "select",
          onChange: (value) => console.log("Marital Status:", value),
          rtl: true,
          value: "",
        },
        {
          icon: <Icon icon='mdi:shield-account' />,
          title: "وضعیت نظام وظیفه",
          required: false,
          name: "militaryStatus",
          type: "select",
          onChange: (value) => console.log("Military Status:", value),
          rtl: true,
          value: "",
        },
        {
          icon: <Icon icon='mdi:account-tie' />,
          title: "نام پدر",
          required: true,
          name: "fatherName",
          type: "text",
          onChange: (value) => console.log("Father Name:", value),
          rtl: true,
        },
        {
          icon: <Icon icon='mdi:briefcase' />,
          title: "شغل پدر",
          required: false,
          name: "fatherJob",
          type: "text",
          onChange: (value) => console.log("Father Job:", value),
          rtl: true,
        },
        {
          icon: <Icon icon='mdi:shield-check' />,
          title: "سابقه پرداخت بیمه",
          required: false,
          name: "insuranceHistory",
          type: "text",
          onChange: (value) => console.log("Insurance History:", value),
          rtl: true,
        },
        {
          icon: <Icon icon='mdi:home-map-marker' />,
          title: "آدرس",
          required: true,
          name: "address",
          onChange: (value) => console.log("Address:", value),
          rtl: true,
          multiLine: { rows: 3, cols: 30 },
        },
        {
          icon: <Icon icon='mdi:phone' />,
          title: "شماره تماس",
          required: true,
          name: "phoneNumber",
          type: "tel",
          onChange: (value) => console.log("Phone:", value),
          rtl: true,
        },
      ],
    },
    {
      title: language === LanguagesENUM.FA ? "سوابق تحصیلی" : "",
      fields: [
        {
          icon: <Icon icon='mdi:school-outline' />,
          title: "رشته تحصیلی",
          required: true,
          name: "fieldOfStudy",
          type: "text",
          onChange: (value) => console.log("Field of Study:", value),
          rtl: true,
        },

        {
          icon: <Icon icon='mdi:school' />,
          title: "مقطع تحصیلی",
          required: true,
          name: "educationLevel",
          type: "select",
          onChange: (value) => console.log("Education Level:", value),
          rtl: true,
          value: "",
        },

        {
          icon: <Icon icon='mdi:calculator-variant' />,
          title: "معدل",
          required: false,
          name: "gpa",
          type: "number",
          onChange: (value) => console.log("GPA:", value),
          rtl: true,
        },

        {
          icon: <Icon icon='mdi:office-building' />,
          title: "نام موسسه آموزش",
          required: true,
          name: "instituteName",
          type: "text",
          onChange: (value) => console.log("Institute Name:", value),
          rtl: true,
        },
      ],
    },
  ];

  const [currentGroup, setGroup] = useState(groups[0]);

  const { mutate: ApplyCareer } = useMutation({
    mutationFn: ApplyToCareerAPI,
    onSuccess(data, variables, onMutateResult, context) {
      onFlip();
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
          <div className={styles.tabs}>
            {groups.map((group) => {
              return (
                <Button
                  icon=''
                  title={group.title}
                  variant='danger'
                  fill={currentGroup.title === group.title ? "fill" : "outline"}
                  onClick={() => setGroup(group)}
                  key={group.title}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.group} key={currentGroup.title}>
          <h2>{currentGroup.title}</h2>
          {currentGroup.fields.map((field, index) => {
            return (
              <Field.Text
                {...field}
                key={index}
              />
            );
          })}
        </div>

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
