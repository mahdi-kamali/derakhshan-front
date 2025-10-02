"use client";
import Field from "@/components/UI/Fields/Field";
import styles from "./styles.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "@/components/UI/Button/Button";
import { motion } from "framer-motion";
import { ISection } from "@/types/sections.types";
import { LanguagesENUM } from "@/types/Language/Language.types";
import { urls } from "@/common/urls";
import { useFormik } from "formik";
import { useMutation } from "@tanstack/react-query";
import { CreateContactAPI } from "@/services/Contact-Us/contact_us.services";
import { IContact } from "@/types/contact-us.types";
import { ShowQuestion } from "@/utils/toast/Toast";

interface IProps {
  section: Extract<ISection, { type: "CONTACT_US" }>;
  language: LanguagesENUM;
}

export default function Hero(props: IProps) {
  const { language, section } = props;
  const components = section.components[language].info;

  const configs = {
    background: "/images/contact-us/background.png",
    EN: {
      title: "Contact Us",
      form: [
        {
          name: "lastName",
          title: "Last Name",
          placeholder: "Enter your last name",
          icon: "mdi:account-box",
          required: true,
        },
        {
          name: "firstName",
          title: "First Name",
          placeholder: "Enter your first name",
          icon: "mdi:account",
          required: true,
        },
        {
          name: "email",
          title: "Email",
          placeholder: "Enter your email address",
          icon: "mdi:email",
          type: "email",
          required: true,
        },
        {
          name: "website",
          title: "Website",
          placeholder: "Enter your website",
          icon: "mdi:web",
          type: "url",
        },
        {
          name: "phone",
          title: "Phone Number",
          placeholder: "Enter your phone number",
          icon: "mdi:phone",
          type: "tel",
          gridColumn: "-1/1",
        },
        {
          name: "address",
          title: "Address",
          placeholder: "Enter your address",
          icon: "mdi:map-marker",
          gridColumn: "-1/1",
          multiLine: { cols: 5, rows: 5 },
        },
        {
          name: "message",
          title: "Message",
          placeholder: "Type your message",
          icon: "mdi:message-text",
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
          name: "lastName",
          title: "نام خانوادگی",
          placeholder: "نام خانوادگی خود را وارد کنید",
          icon: "mdi:account-box",
          required: true,
        },
        {
          name: "firstName",
          title: "نام",
          placeholder: "نام خود را وارد کنید",
          icon: "mdi:account",
          required: true,
        },
        {
          name: "email",
          title: "ایمیل",
          placeholder: "ایمیل خود را وارد کنید",
          icon: "mdi:email",
          type: "email",
          required: true,
        },
        {
          name: "website",
          title: "وبسایت",
          placeholder: "وبسایت خود را وارد کنید",
          icon: "mdi:web",
          type: "url",
        },
        {
          name: "phone",
          title: "شماره تماس",
          placeholder: "شماره تماس خود را وارد کنید",
          icon: "mdi:phone",
          type: "tel",
          gridColumn: "-1/1",
        },
        {
          name: "address",
          title: "آدرس",
          placeholder: "آدرس خود را وارد کنید",
          icon: "mdi:map-marker",
          gridColumn: "-1/1",
          multiLine: { cols: 5, rows: 5 },
        },
        {
          name: "message",
          title: "پیام",
          placeholder: "پیام خود را بنویسید...",
          icon: "mdi:message-text",
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

  const { values, setFieldValue, handleChange } = useFormik({
    initialValues: {
      email: "",
      createdAt: "",
      firstName: "",
      lastName: "",
      message: "",
      phone: "",
      updatedAt: "",
    } as IContact,
    onSubmit(values, formikHelpers) {},
  });

  const { mutate: CreateContact } = useMutation({
    mutationFn: CreateContactAPI,
    onSuccess(data, variables, onMutateResult, context) {
      console.log(data);
    },
  });

  return (
    <section className={styles.hero}>
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
                key={key}>
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
            <Field.Text
              key={field.name}
              icon={<Icon icon={field.icon} />}
              name={field.name}
              title={field.title}
              type={field.type}
              required={field.required}
              onChange={(value) => {
                setFieldValue(field.name, value);
              }}
              rtl={language === "FA"}
              gridColumn={field.gridColumn}
              multiLine={field.multiLine}
            />
          ))}

          <Button
            icon='ep:top-right'
            title={configs[language].submit}
            variant='primary'
            onClick={() => {
              ShowQuestion({
                onConfirm() {
                  CreateContact(values);
                },
                onCancel() {},
              });
            }}
          />
        </form>
      </motion.div>
    </section>
  );
}
