"use client";
import Field from "@/components/UI/Fields/Field";
import styles from "./styles.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "@/components/UI/Button/Button";
import { motion } from "framer-motion";

export default function Hero() {
  const configs = {
    background: "/images/contact-us/background.png",
    title: "تماس با ما",
    company: {
      image: "/images/contact-us/avatar.png",
      info: [
        {
          label: "نام شرکت",
          name: "name",
          value: "درخشان",
        },
        {
          label: "موقعیت",
          name: "location",
          value: "مونیخ، آلمان",
        },
        {
          label: "توضیحات",
          name: "description",
          value: "کارگاه چاپ افست و برجسته‌کاری",
        },
        {
          label: "تلفن",
          name: "phone",
          value: "+49 (0) 89 / 56 22 95",
        },
        {
          label: "ایمیل",
          name: "email",
          value: "استفاده از فرم تماس",
        },
      ],
      contact: {
        phone: "+49 (0) 89 / 56 22 95",
        email: "استفاده از فرم تماس",
        contact_form: true,
        name: "درخشان",
        location: "مونیخ، آلمان",
        description: "کارگاه چاپ افست و برجسته‌کاری",
      },
    },
  };

  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <img src={configs.background} />
      </div>

      <motion.div
        className={styles.right}
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <img className={styles.avatar} src={configs.company.image} />
        <div className={styles.info}>
          {configs.company.info.map((info) => {
            return (
              <div className={styles.row} key={info.value}>
                <label>{info.label} : </label>
                <span>{info.value}</span>
              </div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        className={styles.left}
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1>{configs.title}</h1>
        <form>
          <Field.Text
            icon={<Icon icon="mdi:account" />}
            name="firstName"
            title="نام"
            required
            onChange={(value) => console.log(value)}
            rtl
          />

          <Field.Text
            icon={<Icon icon="mdi:account-box" />}
            name="lastName"
            title="نام خانوادگی"
            required
            onChange={(value) => console.log(value)}
            rtl
          />

          <Field.Text
            icon={<Icon icon="mdi:email" />}
            name="email"
            title="ایمیل"
            type="email"
            required
            onChange={(value) => console.log(value)}
            rtl
          />

          <Field.Text
            icon={<Icon icon="mdi:web" />}
            name="website"
            title="وب سایت"
            type="url"
            onChange={(value) => console.log(value)}
            rtl
          />

          <Field.Text
            icon={<Icon icon="mdi:phone" />}
            name="phone"
            title="شماره تماس"
            type="tel"
            onChange={(value) => console.log(value)}
            rtl
            gridColumn={"-1/1"}
          />

          <Field.Text
            icon={<Icon icon="mdi:map-marker" />}
            name="address"
            title="آدرس"
            onChange={(value) => console.log(value)}
            rtl
            gridColumn={"-1/1"}
            multiLine={{
              cols: 5,
              rows: 5,
            }}
          />

          <Field.Text
            icon={<Icon icon="mdi:message-text" />}
            name="message"
            title="پیام"
            required
            onChange={(value) => console.log(value)}
            rtl
            gridColumn={"-1/1"}
            multiLine={{
              cols: 5,
              rows: 5,
            }}
          />

          <Button
            icon="ep:top-right"
            title="ثبت فرم تماس"
            variant="primary"
          />
        </form>
      </motion.div>
    </section>
  );
}
