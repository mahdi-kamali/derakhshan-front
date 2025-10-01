import Button from "@/components/UI/Button/Button";
import HighLight from "@/components/UI/HighLight/HighLight";

import styles from "./styles.module.scss";

interface JobTitle {
  text: string;
  marked: string;
}

export interface IJob {
  type: string;
  title: JobTitle;
  requirements: string[];
  description: string;
  apply: string;
  image: string;
}

interface IProps {
  job: IJob;
  isLast: boolean;
}

export default function JOB(props: IProps) {
  const { job, isLast } = props;
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
      key={job.image}
    >
      <div className={styles.right}>
        <img src={job.image} alt="" />
      </div>
      <div className={styles.left}>
        <HighLight text={job.title.text} marked={job.title.marked} />
        <ul className={styles.requirements}>
          {job.requirements.map((req) => {
            return <li key={req}>{req}</li>;
          })}
        </ul>

        <div className={styles.description}>{job.description}</div>

        <Button
          title="ارسال فرم استخدامی"
          icon="ep:top-right"
          variant="primary"
          fill={isLast ? "fill" : "outline"}
        />
      </div>
    </div>
  );
}
