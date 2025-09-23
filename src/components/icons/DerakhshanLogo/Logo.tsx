import { url } from "inspector";
import styles from "./styles.module.scss";
import { urls } from "@/common/urls";

interface IProps {
  src: string;
}

const Logo = (props: IProps) => {
  const { src } = props;
  return (
    <div className={styles.logo}>
      <img
        src={urls.STORAGE(src)}
        alt='company-logo'
      />
    </div>
  );
};

export default Logo;
