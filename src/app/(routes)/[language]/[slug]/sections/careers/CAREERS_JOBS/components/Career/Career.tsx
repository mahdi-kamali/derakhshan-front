import Button from "@/components/UI/Button/Button";
import HighLight from "@/components/UI/HighLight/HighLight";
import styles from "./styles.module.scss";
import { ICareer } from "@/types/careers.types";
import { urls } from "@/common/urls";
import { LanguagesENUM } from "@/types/Language/Language.types";

interface IProps {
  career: ICareer;
  isLast: boolean;
  language: LanguagesENUM;
}

export default function Career(props: IProps) {
  const { isLast, language, career } = props;

  const values = career[language];

  return (
    <div
      className={styles.career}
      key={values._id}
      lang={language}>
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

        <Button
          title={
            language === LanguagesENUM.FA
              ? "ارسال فرم استخدامی"
              : "Send Applying"
          }
          icon='ep:top-right'
          variant='primary'
          fill={isLast ? "fill" : "outline"}
        />
      </div>
    </div>
  );
}
