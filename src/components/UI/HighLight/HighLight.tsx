import styles from "./styles.module.scss";
interface IProps {
  text: string;
  marked: string;
}

export default function HighLight(props: IProps) {
  const { marked, text } = props;

  const start = text.indexOf(marked);

  const firstString = text.substring(0, start);

  const secondString = marked;

  const thirdString = text.substring(firstString.length + secondString.length);

  return (
    <h1 className={styles.highLight}>
      <span className={styles.first}>{firstString}</span>
      <span className={styles.second}>{secondString}</span>
      <span className={styles.third}>{thirdString}</span>
    </h1>
  );
}
