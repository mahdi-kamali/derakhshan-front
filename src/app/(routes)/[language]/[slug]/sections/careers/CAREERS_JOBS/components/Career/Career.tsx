import Button from "@/components/UI/Button/Button";
import HighLight from "@/components/UI/HighLight/HighLight";
import styles from "./styles.module.scss";
import { ICareer } from "@/types/careers.types";
import { urls } from "@/common/urls";
import { LanguagesENUM } from "@/types/Language/Language.types";
import ApplyForm from "./apply/ApplyForm";
import { useState } from "react";

import ReactCardFlip from "react-card-flip";

interface IProps {
  career: ICareer;
  language: LanguagesENUM;
}

export default function Career(props: IProps) {
  const { language, career } = props;

  const values = career[language];

  const [isApplying, setIsApplying] = useState(false);

  const accordion = [styles.accordion, isApplying && styles.expanded].join(" ");

  const RenderApplyButton = () => {
    if (isApplying) {
      return (
        <Button
          title={
            language === LanguagesENUM.FA ? "لغو و بستن" : "Cancel & Close"
          }
          icon='line-md:close'
          variant='primary'
          fill={values.type === "SPECIAL" ? "fill" : "outline"}
          onClick={() => setIsApplying((prev) => !prev)}
        />
      );
    }
    return (
      <Button
        title={
          language === LanguagesENUM.FA ? "ارسال فرم استخدامی" : "Send Applying"
        }
        icon='ep:top-right'
        variant='primary'
        fill={values.type === "SPECIAL" ? "fill" : "outline"}
        onClick={() => setIsApplying((prev) => !prev)}
      />
    );
  };

  return (
    <div
      className={[
        styles.career,
        values.type === "SPECIAL" && styles.special,
      ].join(" ")}
      key={values._id}
      lang={language}>
      <div className={styles.front}>
        <div className={styles.right}>
          <img
            src={urls.STORAGE(values.image.path)}
            alt=''
          />
        </div>
        <div className={styles.left}>
          <HighLight
            text={values.title}
            marked={""}
          />
          <ul className={styles.requirements}>
            {values.skills.map((req) => {
              return <li key={req}>{req}</li>;
            })}
          </ul>

          <div className={styles.description}>{values.description}</div>
          <RenderApplyButton />
        </div>
      </div>

      <div className={accordion}>
        <div className={styles.back}>
          <ApplyForm
            career_id={career._id}
            onFlip={() => setIsApplying((prev) => !prev)}
          />
        </div>
      </div>
    </div>
  );
}
