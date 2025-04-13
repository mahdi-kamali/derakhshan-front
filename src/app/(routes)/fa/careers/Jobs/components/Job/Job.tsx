import Button from "@/components/UI/Button/Button";
import HighLight from "@/components/UI/HighLight/HighLight";

import styles from "./styles.module.scss";

interface JobTitle {
  text: string;
  marked: string;
}

interface IJob {
  type: string;
  title: JobTitle;
  requirements: string[];
  description: string;
  image: string;
}

interface IProps {
  job: IJob;
}

export default function Job(props: IProps) {
  const { job } = props;
  return (
    <div
      className={styles.job}
      key={job.image}>
      <div className={styles.right}>
        <img
          src={job.image}
          alt=''
        />
      </div>
      <div className={styles.left}>
        <HighLight
          text={job.title.text}
          marked={job.title.marked}
        />
        <ul className={styles.requirements}>
          {job.requirements.map((req) => {
            return <li key={req}>{req}</li>;
          })}
        </ul>

        <div className={styles.description}>{job.description}</div>

        <Button
          title='ارسال فرم استخدامی'
          icon='ep:top-right'
          variant='primary'
          fill='outline'
        />
      </div>
    </div>
  );
}
