import Button from "@/components/UI/Button/Button";
import HighLight from "@/components/UI/HighLight/HighLight";
import styles from "./styles.module.scss";
import { ICareer } from "@/types/careers.types";
import { urls } from "@/common/urls";

interface IProps {
  career: ICareer;
  isLast: boolean;
}

export default function Career(props: IProps) {
  const { career, isLast } = props;
  return (
    <div
      style={
        isLast
          ? {
              backgroundColor: "rgba(255, 242, 101,0.5)",
              borderRadius: "15px",
              padding: "20px",
              border: "1px solid white",
            }
          : {}
      }
      className={styles.job}
      key={career._id}>
      <div className={styles.right}>
        <img
          src={urls.STORAGE(career.image.path)}
          alt=''
        />
      </div>
      <div className={styles.left}>
        <HighLight
          text={career.title}
          marked={""}
        />
        <ul className={styles.requirements}>
          {career.skills.map((req) => {
            return <li key={req}>{req}</li>;
          })}
        </ul>

        <div className={styles.description}>{career.description}</div>

        <Button
          title='ارسال فرم استخدامی'
          icon='ep:top-right'
          variant='primary'
          fill={isLast ? "fill" : "outline"}
        />
      </div>
    </div>
  );
}
