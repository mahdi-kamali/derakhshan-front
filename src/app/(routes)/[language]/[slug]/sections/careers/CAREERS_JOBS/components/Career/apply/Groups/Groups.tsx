import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import Field from "@/components/UI/Fields/Field";
import styles from "./styles.module.scss";
import { IGroupField } from "../ApplyForm";
import { ICareerApply } from "@/types/careers.types";
import { FormikContextType, useFormik } from "formik";
import { LanguagesENUM } from "@/types/Language/Language.types";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useParams } from "next/navigation";
import AplyAnimation from "@/assets/animations/apply";
import LeaningAnimation from "@/assets/animations/learning/LeaningAnimation";
import { IField } from "@/components/UI/Fields/Field.types";
import WorkAnimation from "@/assets/animations/works/WorkAnimation";
import SkillsAnimation from "@/assets/animations/Skills/SkillsAnimation";

interface IProps {
  formik: FormikContextType<ICareerApply>;
}

export default function Groups(props: IProps) {
  const { formik } = props;
  const { values, setFieldValue, handleChange, errors } = formik;

  const { language }: { language: LanguagesENUM } = useParams();

  // مشخصات فردی / Personal Information
  const personalInfoGroup: IGroupField = {
    title:
      language === LanguagesENUM.FA ? "مشخصات فردی" : "Personal Information",
    icon: <Icon icon='material-symbols:info' />,
    fields: [
      {
        icon: <Icon icon='mdi:account' />,
        title:
          language === LanguagesENUM.FA ? "نام و نام خانوادگی" : "Full Name",
        required: true,
        name: "personalInfo.fullName",
        type: "text",
        onChange: (value) => console.log("Full Name:", value),
        rtl: true,
        color: "black",
        error: errors.personalInfo?.fullName,
      },
      {
        icon: <Icon icon='mdi:card-account-details' />,
        title: language === LanguagesENUM.FA ? "کد ملی" : "National ID",
        required: true,
        name: "personalInfo.nationalId",
        type: "text",
        onChange: (value) => console.log("National ID:", value),
        rtl: true,
        color: "black",
        error: errors.personalInfo?.nationalId,
      },
      {
        icon: <Icon icon='mdi:cake-variant' />,
        title: language === LanguagesENUM.FA ? "تاریخ تولد" : "Date of Birth",
        required: true,
        name: "personalInfo.birthDate",
        type: "date",
        onChange: (value) => console.log("Birth Date:", value),
        rtl: true,
        color: "black",
      },
      {
        icon: <Icon icon='mdi:map-marker' />,
        title: language === LanguagesENUM.FA ? "محل تولد" : "Place of Birth",
        required: true,
        name: "personalInfo.birthPlace",
        type: "text",
        onChange: (value) => console.log("Birth Place:", value),
        rtl: true,
        color: "black",
      },
      {
        icon: <Icon icon='mdi:map-marker-outline' />,
        title: language === LanguagesENUM.FA ? "محل صدور" : "Place of Issue",
        required: true,
        name: "personalInfo.issuePlace",
        type: "text",
        onChange: (value) => console.log("Issue Place:", value),
        rtl: true,
        color: "black",
      },
      {
        icon: <Icon icon='mdi:heart' />,
        title: language === LanguagesENUM.FA ? "وضعیت تاهل" : "Marital Status",
        required: false,
        name: "personalInfo.maritalStatus",
        type: "text",
        onChange: (value) => console.log("Marital Status:", value),
        rtl: true,
        color: "black",
      },
      {
        icon: <Icon icon='mdi:shield-account' />,
        title:
          language === LanguagesENUM.FA
            ? "وضعیت نظام وظیفه"
            : "Military Service Status",
        required: false,
        name: "personalInfo.militaryStatus",
        type: "text",
        onChange: (value) => console.log("Military Status:", value),
        rtl: true,
        color: "black",
      },
      {
        icon: <Icon icon='mdi:account-tie' />,
        title: language === LanguagesENUM.FA ? "نام پدر" : "Father's Name",
        required: true,
        name: "personalInfo.fatherName",
        type: "text",
        onChange: (value) => console.log("Father Name:", value),
        rtl: true,
        color: "black",
      },
      {
        icon: <Icon icon='mdi:briefcase' />,
        title:
          language === LanguagesENUM.FA ? "شغل پدر" : "Father's Occupation",
        required: false,
        name: "personalInfo.fatherJob",
        type: "text",
        onChange: (value) => console.log("Father Job:", value),
        rtl: true,
        color: "black",
      },
      {
        icon: <Icon icon='mdi:shield-check' />,
        title:
          language === LanguagesENUM.FA
            ? "سابقه پرداخت بیمه"
            : "Insurance Payment Record",
        required: false,
        name: "personalInfo.insuranceHistory",
        type: "text",
        onChange: (value) => console.log("Insurance History:", value),
        rtl: true,
        color: "black",
      },
      {
        icon: <Icon icon='mdi:phone' />,
        title: language === LanguagesENUM.FA ? "شماره تماس" : "Phone Number",
        required: true,
        name: "personalInfo.phoneNumber",
        type: "tel",
        onChange: (value) => console.log("Phone:", value),
        rtl: true,
        color: "black",
      },
    ],
    info: {
      title:
        language === LanguagesENUM.FA
          ? "راجب خودتان بگویید"
          : "Tell Us About Yourself",
      description:
        language === LanguagesENUM.FA
          ? "اطلاعات فردی و شناسایی خود را وارد کنید."
          : "Please provide your basic personal and identification information.",
      animation: <AplyAnimation />,
    },
  };

  // -------------------------
  // سوابق تحصیلی / Educational Background
  // -------------------------
  const educationGroup: IGroupField = {
    title:
      language === LanguagesENUM.FA ? "سوابق تحصیلی" : "Educational Background",
    icon: <Icon icon='tdesign:education-filled' />,
    fields: [
      {
        type: "array",
        icon: <Icon icon='tdesign:education-filled' />,
        name: "education",
        title:
          language === LanguagesENUM.FA
            ? "سوابق تحصیلی"
            : "Educational Background",
        onRednerRow(value, index) {
          const fields: IField[] = [
            {
              icon: <Icon icon='mdi:school-outline' />,
              title:
                language === LanguagesENUM.FA
                  ? "رشته تحصیلی"
                  : "Field of Study",
              required: true,
              name: `education[${index}].fieldOfStudy`,
              type: "text",
              onChange: (value: any) =>
                setFieldValue(`education[${index}].fieldOfStudy`, value),
              rtl: true,
              color: "black",
            },
            {
              icon: <Icon icon='mdi:school' />,
              title:
                language === LanguagesENUM.FA
                  ? "مقطع تحصیلی"
                  : "Education Level",
              required: true,
              name: `education[${index}].level`,
              type: "text",
              onChange: (value) =>
                setFieldValue(`education[${index}].level`, value),
              rtl: true,
              color: "black",
            },
            {
              icon: <Icon icon='mdi:calculator-variant' />,
              title: language === LanguagesENUM.FA ? "معدل" : "GPA",
              required: false,
              name: `education[${index}].gpa`,
              type: "number",
              onChange: (value) =>
                setFieldValue(`education[${index}].gpa`, value),
              rtl: true,
              color: "black",
            },
            {
              icon: <Icon icon='mdi:office-building' />,
              title:
                language === LanguagesENUM.FA
                  ? "نام موسسه آموزش"
                  : "Institute Name",
              required: true,
              name: `education[${index}].institute`,
              type: "text",
              onChange: (value) =>
                setFieldValue(`education[${index}].institute`, value),
              rtl: true,
              color: "black",
            },
          ];

          return fields.map((field) => {
            if (field.type === "array") return <></>;
            if (field.type === "select") return <Field.Select {...field} />;
            return <Field.Text {...field} />;
          });
        },
        onAddRow(fieldName, index) {
          values.education.push({
            fieldOfStudy: "",
            gpa: "",
            institute: "",
            level: "",
          });
          setFieldValue(fieldName, values.education);
        },
        onRemoveRow(fieldName, index) {
          const temp = values.education.filter((_, target) => target !== index);
          setFieldValue(fieldName, temp);
        },
        values: values.education,
      },
    ],
    info: {
      title:
        language === LanguagesENUM.FA
          ? "از تحصیلاتتان بگویید"
          : "Share Your Education",
      description:
        language === LanguagesENUM.FA
          ? "اطلاعات مربوط به تحصیلات و سوابق آموزشی خود را بنویسید."
          : "Enter your academic background and educational history.",
      animation: <LeaningAnimation />,
    },
  };

  // -------------------------
  // سوابق کاری / Work Experience
  // -------------------------
  const workExperienceGroup: IGroupField = {
    title: language === LanguagesENUM.FA ? "سوابق کاری" : "Work Experience",
    icon: <Icon icon='mdi:briefcase-outline' />,
    fields: [
      {
        icon: <Icon icon='mdi:currency-rial' />,
        title:
          language === LanguagesENUM.FA
            ? "آخرین حقوق دریافتی"
            : "Last Received Salary",
        name: "lastSalary",
        type: "number",
        onChange: (value) => console.log("Last Salary:", value),
        rtl: true,
        color: "black",
      },
      {
        icon: <Icon icon='mdi:clock-time-four-outline' />,
        title:
          language === LanguagesENUM.FA
            ? "مدت زمان بیمه"
            : "Insurance Duration",
        name: "insuranceDuration",
        type: "text",
        onChange: (value) => console.log("Insurance Duration:", value),
        rtl: true,
        color: "black",
      },
      {
        icon: <Icon icon='mdi:account-question' />,
        title:
          language === LanguagesENUM.FA
            ? "بیمه بیکاری استفاده کرده اید؟"
            : "Used Unemployment Insurance?",
        name: "usedUnemploymentInsurance",
        type: "text",
        onChange: (value) => console.log("Used Unemployment Insurance:", value),
        rtl: true,
        color: "black",
      },
      {
        type: "array",
        name: "workExperience.works",
        title: "تجربه های کاری شما",
        icon: <Icon icon='material-symbols:work-sharp' />,
        values: values.workExperience.works,
        color: "black",
        onRednerRow(value, index) {
          const fields: IField[] = [
            {
              icon: <Icon icon='mdi:domain' />,
              title: language === LanguagesENUM.FA ? "سازمان" : "Organization",
              name: `workExperience.works[${index}]`,
              type: "text",
              onChange: (value) =>
                setFieldValue(
                  `workExperience.works[${index}].organization`,
                  value,
                ),
              rtl: true,
              color: "black",
            },
            {
              icon: <Icon icon='mdi:handshake-outline' />,
              title:
                language === LanguagesENUM.FA
                  ? "زمینه همکاری"
                  : "Field of Cooperation",
              name: `workExperience.works[${index}].role`,
              type: "text",
              onChange: (value) =>
                setFieldValue(`workExperience.works[${index}].role`, value),
              rtl: true,
              color: "black",
            },
            {
              icon: <Icon icon='mdi:calendar-clock' />,
              title:
                language === LanguagesENUM.FA
                  ? "مدت همکاری"
                  : "Duration of Employment",
              name: `workExperience.works[${index}].duration`,
              type: "text",
              onChange: (value) =>
                setFieldValue(`workExperience.works[${index}].duration`, value),
              rtl: true,
              color: "black",
            },
            {
              icon: <Icon icon='mdi:close-circle-outline' />,
              title:
                language === LanguagesENUM.FA
                  ? "علت قطع همکاری"
                  : "Reason for Leaving",
              name: `workExperience.works[${index}].terminationReason`,
              type: "text",
              onChange: (value) =>
                setFieldValue(
                  `workExperience.works[${index}].terminationReason`,
                  value,
                ),
              rtl: true,
              color: "black",
            },
          ];
          return fields.map((field) => {
            if (field.type === "array") return <></>;
            if (field.type === "select") return <Field.Select {...field} />;
            return <Field.Text {...field} />;
          });
        },
        onAddRow(fieldName, index) {
          values.workExperience.works.push({
            duration: "",
            organization: "",
            role: "",
            terminationReason: "",
          });
          setFieldValue("workExperience.works", values.workExperience.works);
        },
        onRemoveRow(fieldName, index) {
          const temp = values.workExperience.works.filter(
            (_, target) => target !== index,
          );
          setFieldValue("workExperience.works", temp);
        },
      },
    ],
    info: {
      title:
        language === LanguagesENUM.FA ? "سوابق کاری" : "Your Work Experience",
      description:
        language === LanguagesENUM.FA
          ? "تجربیات شغلی و سابقه کاری خود را وارد کنید."
          : "Provide your professional and work experience details.",
      animation: <WorkAnimation />,
    },
  };

  // -------------------------
  // مهارت‌ها / Skills
  // -------------------------
  const skillsGroup: IGroupField = {
    title: language === LanguagesENUM.FA ? "مهارت‌ها" : "Skills",
    icon: <Icon icon='mdi:star-outline' />,
    fields: [
      {
        icon: <Icon icon='mdi:gauge' />,
        title:
          language === LanguagesENUM.FA ? "میزان تسلط" : "Proficiency Level",
        name: "proficiencyLevel",
        type: "array",
        onChange: (value) => console.log("Proficiency Level:", value),
        rtl: true,
        onRednerRow(value, index) {
          const fields: IField[] = [
            {
              icon: <Icon icon='mdi:school-outline' />,
              title: language === LanguagesENUM.FA ? "نام مهارت" : "skill name",
              required: true,
              name: `skills[${index}].name`,
              type: "text",
              onChange: (value: any) =>
                setFieldValue(`skills[${index}].name`, value),
              rtl: true,
              color: "black",
            },
            {
              icon: <Icon icon='mdi:school-outline' />,
              title:
                language === LanguagesENUM.FA ? "میزان تسلط" : "skill level",
              required: true,
              name: `skills[${index}].level`,
              type: "text",
              onChange: (value: any) =>
                setFieldValue(`skills[${index}].level`, value),
              rtl: true,
              color: "black",
            },
          ];

          return fields.map((field) => {
            if (field.type === "array") return <></>;
            if (field.type === "select") return <Field.Select {...field} />;
            return <Field.Text {...field} />;
          });
        },
        onAddRow(fieldName, index) {
          values.skills.push({
            level: "",
            name: "",
          });
          setFieldValue("skills", values.skills);
        },
        onRemoveRow(fieldName, index) {
          const temp = values.skills.filter((_, target) => target !== index);
          setFieldValue("skills", temp);
        },
        values: values.skills,
        color: "black",
      },
    ],
    info: {
      title: language === LanguagesENUM.FA ? "مهارت‌ها" : "Your Skills",
      description:
        language === LanguagesENUM.FA
          ? "مهارت‌های فردی یا فنی خود را اضافه کنید."
          : "List your personal or technical skills.",
      animation: <SkillsAnimation />,
    },
  };

  // -------------------------
  // نرم‌افزار / Software
  // -------------------------
  // -------------------------
  // نرم‌افزار / Software
  // -------------------------
  const softwareGroup: IGroupField = {
    title: language === LanguagesENUM.FA ? "نرم‌افزار" : "Software Knowledge",
    icon: <Icon icon='mdi:laptop' />,
    fields: [
      {
        type: "array",
        icon: <Icon icon='mdi:laptop' />,
        name: "software",
        title:
          language === LanguagesENUM.FA
            ? "نرم‌افزارهایی که بلد هستید"
            : "Software You Know",
        values: values.software,
        onRednerRow(value, index) {
          const fields: IField[] = [
            {
              icon: <Icon icon='mdi:application-outline' />,
              title:
                language === LanguagesENUM.FA
                  ? "نام نرم‌افزار"
                  : "Software Name",
              required: true,
              name: `software[${index}].name`,
              type: "text",
              onChange: (value) =>
                setFieldValue(`software[${index}].name`, value),
              rtl: true,
              color: "black",
            },
            {
              icon: <Icon icon='mdi:star' />,
              title:
                language === LanguagesENUM.FA
                  ? "میزان تسلط"
                  : "Proficiency Level",
              required: true,
              name: `software[${index}].level`,
              type: "text",
              onChange: (value) =>
                setFieldValue(`software[${index}].level`, value),
              rtl: true,
              color: "black",
            },
          ];

          return fields.map((field) => {
            if (field.type === "array") return <></>;
            if (field.type === "select") return <Field.Select {...field} />;
            return <Field.Text {...field} />;
          });
        },
        onAddRow(fieldName, index) {
          values.software.push({
            name: "",
            level: "",
          });
          setFieldValue("software", values.software);
        },
        onRemoveRow(fieldName, index) {
          const temp = values.software.filter((_, target) => target !== index);
          setFieldValue("software", temp);
        },
      },
    ],
    info: {
      title:
        language === LanguagesENUM.FA
          ? "مهارت‌های نرم‌افزاری"
          : "Software Proficiency",
      description:
        language === LanguagesENUM.FA
          ? "نرم‌افزارهایی که در آن‌ها مهارت دارید را وارد کنید."
          : "Add the software tools you are proficient with.",
      animation: <></>,
    },
  };

  // -------------------------
  // تسلط به زبان‌های خارجی / Language Skills
  // -------------------------
  const languageGroup: IGroupField = {
    title:
      language === LanguagesENUM.FA
        ? "تسلط به زبان‌های خارجی"
        : "Language Proficiency",
    icon: <Icon icon='mdi:translate' />,
    fields: [
      {
        type: "array",
        icon: <Icon icon='mdi:translate' />,
        name: "languages",
        title:
          language === LanguagesENUM.FA
            ? "زبان‌های خارجی"
            : "Foreign Languages",
        values: values.languages,
        onRednerRow(value, index) {
          const fields: IField[] = [
            {
              icon: <Icon icon='mdi:alphabet-latin' />,
              title: language === LanguagesENUM.FA ? "زبان" : "Language",
              required: true,
              name: `languages[${index}].name`,
              type: "text",
              onChange: (value) =>
                setFieldValue(`languages[${index}].name`, value),
              rtl: true,
              color: "black",
            },
            {
              icon: <Icon icon='mdi:star-circle-outline' />,
              title:
                language === LanguagesENUM.FA
                  ? "میزان تسلط"
                  : "Proficiency Level",
              required: true,
              name: `languages[${index}].level`,
              type: "select",
              options: [
                {
                  label: language === LanguagesENUM.FA ? "مبتدی" : "Beginner",
                  value: "Beginner",
                },
                {
                  label:
                    language === LanguagesENUM.FA ? "متوسط" : "Intermediate",
                  value: "Intermediate",
                },
                {
                  label: language === LanguagesENUM.FA ? "پیشرفته" : "Advanced",
                  value: "Advanced",
                },
                {
                  label: language === LanguagesENUM.FA ? "حرفه‌ای" : "Fluent",
                  value: "Fluent",
                },
              ],
              onChange: (value) =>
                setFieldValue(`languages[${index}].level`, value),
              rtl: true,
              color: "black",
            },
          ];

          return fields.map((field) => {
            if (field.type === "array") return <></>;
            if (field.type === "select") return <Field.Select {...field} />;
            return <Field.Text {...field} />;
          });
        },
        onAddRow(fieldName, index) {
          values.languages.push({
            name: "",
            level: "",
          });
          setFieldValue("languages", values.languages);
        },
        onRemoveRow(fieldName, index) {
          const temp = values.languages.filter((_, target) => target !== index);
          setFieldValue("languages", temp);
        },
      },
    ],
    info: {
      title:
        language === LanguagesENUM.FA
          ? "تسلط به زبان‌های خارجی"
          : "Language Skills",
      description:
        language === LanguagesENUM.FA
          ? "زبان‌هایی که بلد هستید و میزان تسلط خود را وارد کنید."
          : "Add the languages you know and specify your proficiency level.",
      animation: <></>,
    },
  };

  // -------------------------
  // آپلود رزومه / Resume Upload
  // -------------------------
  const resumeUploadGroup: IGroupField = {
    title: language === LanguagesENUM.FA ? "آپلود رزومه" : "Upload Resume",
    icon: <Icon icon='mdi:file-upload-outline' />,
    fields: [
      {
        icon: <Icon icon='mdi:file-upload-outline' />,
        title:
          language === LanguagesENUM.FA ? "آپلود رزومه" : "Upload Your Resume",
        name: "uplodas.resume",
        type: "file",
        onChange: (value) => setFieldValue("uplodas.resume", value),
        rtl: true,
        color: "black",
      },
      {
        icon: <Icon icon='mdi:image-outline' />,
        title:
          language === LanguagesENUM.FA
            ? "آپلود عکس سازمانی"
            : "Upload Organization Photo",
        name: "uplodas.organization",
        type: "file",
        onChange: (value) => setFieldValue("uplodas.organization", value),
        rtl: true,
        color: "black",
      },
      {
        icon: <Icon icon='mdi:text' />,
        title: language === LanguagesENUM.FA ? "توضیحات" : "Additional Notes",
        name: "description",
        onChange: (value) => console.log("Description:", value),
        rtl: true,
        multiLine: { rows: 3, cols: 30 },
        color: "black",
      },
      {
        icon: <Icon icon='mdi:cash-multiple' />,
        title:
          language === LanguagesENUM.FA ? "حقوق درخواستی" : "Expected Salary",
        name: "expectedSalary",
        type: "number",
        onChange: (value) => console.log("Expected Salary:", value),
        rtl: true,
        color: "black",
      },
    ],
    info: {
      title:
        language === LanguagesENUM.FA
          ? "آپلود رزومه و اطلاعات تکمیلی"
          : "Upload Resume and Additional Info",
      description:
        language === LanguagesENUM.FA
          ? "فایل رزومه خود را بارگذاری کرده و توضیحات لازم را اضافه کنید."
          : "Upload your resume and provide any extra details you'd like to share.",
      animation: <></>,
    },
  };

  // -------------------------
  // Combine all groups (optional)
  // -------------------------
  const groups: IGroupField[] = [
    personalInfoGroup,
    educationGroup,
    workExperienceGroup,
    skillsGroup,
    softwareGroup,
    languageGroup,
    resumeUploadGroup,
  ];

  return (
    <VerticalTimeline
      lineColor='red'
      layout='1-column-right'>
      {groups.map((group) => {
        return (
          <VerticalTimelineElement
            className={styles.container}
            contentStyle={{ padding: 0 }}
            iconClassName={styles.iconClass}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={group.icon}>
            <div className={styles.content}>
              <div className={styles.right}>
                <div className={styles.group}>
                  <h2 className={styles.groupTitle}>{group.title}</h2>
                  <div className={styles.fields}>
                    {group.fields.map((base) => {
                      if (base.type === "file") {
                        return <Field.Image {...(base as any)} />;
                      }
                      if (base.type === "array")
                        return <Field.Array {...base} />;
                      if (base.type === "select")
                        return <Field.Select {...base} />;
                      return (
                        <Field.Text
                          {...base}
                          onChange={(value) => {
                            setFieldValue(base.name, value);
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className={styles.left}>
                <div className={styles.animation}>{group.info.animation}</div>
                <div className={styles.info}>
                  <h2>{group.info.title}</h2>
                  <p>{group.info.description}</p>
                </div>
              </div>
            </div>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
}
