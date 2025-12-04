"use client";
import Field from "@/components/UI/Fields/Field";
import styles from "./styles.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "@/components/UI/Button/Button";
import { motion } from "framer-motion";
import { ISection } from "@/types/sections.types";
import { LanguagesENUM } from "@/types/Language/Language.types";
import { urls } from "@/common/urls";
import { FormikProvider, useFormik } from "formik";
import { useMutation } from "@tanstack/react-query";
import { CreateContactAPI } from "@/services/Contact-Us/contact_us.services";
import { IContact } from "@/types/contact-us.types";
import { ShowError, ShowQuestion } from "@/utils/toast/Toast";
import { ContactUsSchema } from "@/utils/validations/validations";
import { IField } from "@/components/UI/Fields/Field.types";

interface IProps {
  section: Extract<ISection, { type: "CONTACT_US" }>;
  language: LanguagesENUM;
}

interface IConfig {
  background: string;
  EN: {
    title: string;
    form: IField[];
    submit: string;
  };
  FA: {
    title: string;
    form: IField[];
    submit: string;
  };
}

export default function Hero(props: IProps) {
  const { language, section } = props;
  const components = section.components[language].info;

  const configs: IConfig = {
    background: "/images/contact-us/background.png",

    EN: {
      title: "Contact Us",
      form: [
        {
          type: "text",
          name: "lastName",
          title: "Last Name",
          icon: <Icon icon={"mdi:account-box"} />,
          required: true,
        },
        {
          type: "text",
          name: "firstName",
          title: "First Name",
          icon: <Icon icon={"mdi:account"} />,
          required: true,
        },
        {
          type: "email",
          name: "email",
          title: "Email",
          icon: <Icon icon={"mdi:email"} />,
          required: true,
        },
        {
          type: "url",
          name: "website",
          title: "Website",
          icon: <Icon icon={"mdi:web"} />,
        },
        {
          type: "tel",
          name: "phone",
          title: "Phone Number",
          icon: <Icon icon={"mdi:phone"} />,
          gridColumn: "-1/1",
        },
        {
          type: "text",
          name: "address",
          title: "Address",
          icon: <Icon icon={"mdi:map-marker"} />,
          gridColumn: "-1/1",
          multiLine: { cols: 5, rows: 5 },
        },
        {
          type: "text",
          name: "message",
          title: "Message",
          icon: <Icon icon={"mdi:message-text"} />,
          required: true,
          gridColumn: "-1/1",
          multiLine: { cols: 5, rows: 5 },
        },
      ],
      submit: "Submit Contact Form",
    },

    FA: {
      title: "تماس با ما",
      form: [
        {
          type: "text",
          name: "firstName",
          title: "نام",
          icon: <Icon icon={"mdi:account"} />,
          required: true,
        },
        {
          type: "text",
          name: "lastName",
          title: "نام خانوادگی",
          icon: <Icon icon={"mdi:account-box"} />,
          required: true,
        },
        {
          type: "email",
          name: "email",
          title: "ایمیل",
          icon: <Icon icon={"mdi:email"} />,
          required: true,
        },
        {
          type: "url",
          name: "website",
          title: "وبسایت",
          icon: <Icon icon={"mdi:web"} />,
        },
        {
          type: "tel",
          name: "phone",
          title: "شماره تماس",
          icon: <Icon icon={"mdi:phone"} />,
          gridColumn: "-1/1",
        },
        {
          type: "text",
          name: "address",
          title: "آدرس",
          icon: <Icon icon={"mdi:map-marker"} />,
          gridColumn: "-1/1",
          multiLine: { cols: 5, rows: 5 },
        },
        {
          type: "text",
          name: "message",
          title: "پیام",
          icon: <Icon icon={"mdi:message-text"} />,
          required: true,
          gridColumn: "-1/1",
          multiLine: { cols: 5, rows: 5 },
        },
      ],
      submit: "ارسال فرم تماس",
    },
  };

  interface InfoHeader {
    EN: { key: keyof typeof components; label: string }[];
    FA: { key: keyof typeof components; label: string }[];
  }

  const infosHeader: InfoHeader = {
    EN: [
      { key: "company", label: "Company Name" },
      { key: "location", label: "Location" },
      { key: "phone", label: "Phone" },
      { key: "fax", label: "Fax" },
      { key: "email", label: "Email" },
    ],
    FA: [
      { key: "company", label: "نام شرکت" },
      { key: "location", label: "موقعیت" },
      { key: "phone", label: "تلفن" },
      { key: "fax", label: "فکس" },
      { key: "email", label: "ایمیل" },
    ],
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      createdAt: "",
      firstName: "",
      lastName: "",
      message: "",
      phone: "",
      updatedAt: "",
    } as IContact,
    onSubmit(values, formikHelpers) {
      ShowQuestion({
        onConfirm() {
          CreateContact(values);
        },
        onCancel() {},
      });
    },
    validationSchema: ContactUsSchema[language],
    validateOnChange: false,
    validateOnBlur: true,
  });

  const { values, setFieldValue, handleChange, submitForm, errors } = formik;

  const { mutate: CreateContact } = useMutation({
    mutationFn: CreateContactAPI,
    onSuccess(data, variables, onMutateResult, context) {},
  });

  return (
    <FormikProvider value={formik}>
      <section
        className={styles.hero}
        lang={language}>
        <div className={styles.background}>
          <img src={configs.background} />
        </div>

        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}>
          <img
            className={styles.avatar}
            src={urls.STORAGE(components.image.path)}
          />
          <div className={styles.info}>
            {infosHeader[language].map((row) => {
              const { key, label } = row;
              const value = components[row.key];
              return (
                <div
                  className={styles.row}
                  key={key}
                  lang={language}>
                  <label>{label} : </label>
                  <span>{value as any}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
          <h1>{configs[language].title}</h1>
          <form>
            {configs[language].form.map((field) => (
              <Field
                key={field.name}
                icon={field.icon}
                name={field.name}
                title={field.title}
                type={field.type as any}
                required={field.required}
                onChange={(value) => {
                  setFieldValue(field.name, value);
                }}
                rtl={language === "FA"}
                gridColumn={field.gridColumn}
                multiLine={field.multiLine}
                value={values[field.name as keyof typeof values]}
                errors={formik.errors}
                sperators={false}
              />
            ))}

            <div className={styles.actions}>
              <Button
                icon='ep:top-right'
                title={configs[language].submit}
                variant='primary'
                onClick={submitForm}
              />
            </div>
          </form>
        </motion.div>
      </section>
    </FormikProvider>
  );
}
