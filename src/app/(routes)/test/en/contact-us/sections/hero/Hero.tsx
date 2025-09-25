"use client";
import Field from "@/components/UI/Fields/Field";
import styles from "./styles.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "@/components/UI/Button/Button";
import { motion } from "framer-motion";

export default function Hero() {
  const configs = {
    background: "/images/contact-us/background.png",
    title: "Contact Us",
    company: {
      image: "/images/contact-us/avatar.png",
      info: [
        {
          label: "Company Name",
          name: "name",
          value: "Derakhshan Pack Tabriz",
        },
        {
          label: "Location",
          name: "location",
          value: "Iran – Tabriz – Km 6 Tehran Road, Irdak Industrial Zone",
        },
        {
          label: "Phone",
          name: "phone",
          value: "+98 41 36373751-2",
        },
        {
          label: "Fax",
          name: "fax",
          value: "+98 41 36373753",
        },
        {
          label: "Email",
          name: "email",
          value: "info@dppack.com",
        },
      ],
      contact: {
        phone: "+49 (0) 89 / 56 22 95",
        email: "Use Contact Form",
        contact_form: true,
        name: "Derakhshan",
        location: "Munich, Germany",
        description: "Offset Printing & Embossing Workshop",
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
            icon={<Icon icon="mdi:account-box" />}
            name="lastName"
            title="Last Name"
            required
            onChange={(value) => console.log(value)}
            rtl
          />
          <Field.Text
            icon={<Icon icon="mdi:account" />}
            name="firstName"
            title="First Name"
            required
            onChange={(value) => console.log(value)}
            rtl
          />
          <Field.Text
            icon={<Icon icon="mdi:email" />}
            name="email"
            title="Email"
            type="email"
            required
            onChange={(value) => console.log(value)}
            rtl
          />

          <Field.Text
            icon={<Icon icon="mdi:web" />}
            name="website"
            title="Website"
            type="url"
            onChange={(value) => console.log(value)}
            rtl
          />

          <Field.Text
            icon={<Icon icon="mdi:phone" />}
            name="phone"
            title="Phone Number"
            type="tel"
            onChange={(value) => console.log(value)}
            rtl
            gridColumn={"-1/1"}
          />

          <Field.Text
            icon={<Icon icon="mdi:map-marker" />}
            name="address"
            title="Address"
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
            title="Message"
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
            title="Submit Contact Form"
            variant="primary"
          />
        </form>
      </motion.div>
    </section>
  );
}
