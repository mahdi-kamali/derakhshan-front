import Field from "@/components/UI/Fields/Field";
import { IField } from "@/components/UI/Fields/Text/Text";
import { LanguagesENUM } from "@/types/Language/Language.types";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useParams } from "next/navigation";
import styles from "./styles.module.scss";
import Button from "@/components/UI/Button/Button";
import { useState } from "react";

export default function ApplyForm() {
  const { language }: { language: LanguagesENUM } = useParams();

  const [color, setColor] = useState("gray");

  const fields: IField[] = [
    {
      name: "name",
      icon: <Icon icon='icon-park-solid:edit-name' />,
      onChange(value) {},
      title: "نام شما",
      rtl: language === LanguagesENUM.FA ? true : false,
      type: "text",
      required: true,
      color: color,
    },
    {
      name: "family",
      icon: <Icon icon='icon-park-solid:family' />,
      onChange(value) {},
      title: "فامیلی شما",
      rtl: language === LanguagesENUM.FA ? true : false,
      type: "text",
      required: true,
      color: color,
    },
    {
      name: "phone",
      icon: <Icon icon='line-md:phone-filled' />,
      onChange(value) {},
      title: "تلفن همراه",
      rtl: language === LanguagesENUM.FA ? true : false,
      type: "tel",
      required: true,
      color: color,
    },
    {
      name: "address",
      icon: <Icon icon='mdi:address-marker' />,
      onChange(value) {},
      title: "آدرس محل سکونت",
      rtl: language === LanguagesENUM.FA ? true : false,
      type: "text",
      required: true,
      color: color,
      multiLine: {
        cols: 2,
        rows: 2,
      },
    },
    {
      name: "description",
      icon: <Icon icon='streamline-plump:description-solid' />,
      onChange(value) {},
      title: "راجب خودتان بگویید",
      rtl: language === LanguagesENUM.FA ? true : false,
      type: "text",
      required: true,
      color: color,
      multiLine: {
        cols: 4,
        rows: 4,
      },
    },
  ];

  return (
    <form className={styles.form}>
      <div className={styles.left}>
        <h2>ارسال درخواست همکاری</h2>
        <p>
          لطفاً اطلاعات خود را با دقت وارد کنید تا تیم ما بتواند در صورت تأیید،
          با شما تماس بگیرد. شما می‌توانید توضیحاتی درباره‌ی مهارت‌ها، سوابق
          کاری و انگیزه‌ی خود برای پیوستن به مجموعه نیز اضافه کنید.
        </p>
      </div>
      <div className={styles.right}>
        {fields.map((field) => {
          return <Field.Text {...field} />;
        })}
        <Button
          title='ثبت و ارسال'
          icon='formkit:submit'
          variant='success'
          fill='fill'
          onClick={() => {}}
        />
      </div>
    </form>
  );
}
