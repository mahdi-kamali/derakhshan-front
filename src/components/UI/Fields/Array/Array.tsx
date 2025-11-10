import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "../../Button/Button";
import { ArrayField, IField } from "../Field.types";
import styles from "./styles.module.scss";
import { useParams } from "next/navigation";
import { LanguagesENUM } from "@/types/Language/Language.types";
interface IProps extends Extract<IField, ArrayField> {}

export default function Array(props: IProps) {
  const { language }: { language: LanguagesENUM } = useParams();

  const { values, onRednerRow, onAddRow, name, onRemoveRow } = props;
  return (
    <div className={styles.array}>
      {values.map((row, index) => {
        return (
          <div className={styles.row}>
            <Icon
              className={styles.remove}
              icon='mdi:delete'
              onClick={() => onRemoveRow(name, index)}
            />
            <div className={styles.fields}>{onRednerRow(row, index)}</div>
          </div>
        );
      })}

      <div className={styles.add}>
        <Button
          title={language === LanguagesENUM.FA ? "افزودن مورد" : "Add Another"}
          icon='gg:add'
          variant='primary'
          fill='fill'
          onClick={() => onAddRow(name, values.length + 1)}
        />
      </div>
    </div>
  );
}
