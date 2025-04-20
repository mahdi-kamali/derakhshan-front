import styles from "./styles.module.scss";

interface IProps {
  children: any;
}

export default function Description(props: IProps) {
  const { children } = props;
  return <p className={styles.text}>{children}</p>;
}
