import styles from "./styles.module.scss";

interface IProps {
  text: string;
  marked: string;
  firstColor?: string;
  secondColor?: string;
}

export default function HighLight({
  marked,
  text,
  firstColor = "white",
  secondColor = "white",
}: IProps) {
  const start = text.indexOf(marked);

  const firstString = text.substring(0, start);

  const secondString = marked;

  const thirdString = text.substring(firstString.length + secondString.length);

  return (
    <h1 className={styles.highLight}>
      <span
        className={styles.first}
        style={{ color: firstColor, display: firstString ? "bolck" : "none" }}
      >
        {firstString}
      </span>
      <span
        className={styles.second}
        style={{ color: secondColor, display: secondString ? "bolck" : "none" }}
      >
        {secondString}
      </span>
      <span
        className={styles.third}
        style={{ color: firstColor, display: thirdString ? "bolck" : "none" }}
      >
        {thirdString}
      </span>
    </h1>
  );
}
