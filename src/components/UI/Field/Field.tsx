import { useState } from "react";
import Button from "../Button/Button";
import styles from "./styles.module.scss";
import Select from "../Select/Select";
import Input from "../Input/Input";

interface Skill {
  name: string;
  level: number;
}

const defaultSkills = [
  { value: "JavaScript", name: "JavaScript" },
  { value: "React", name: "React" },
  { value: "CSS", name: "CSS" },
  { value: "UI Design", name: "UI Design" },
  { value: "Figma", name: "Figma" },
];

const Field = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [selectedSkill, setSelectedSkill] = useState<{
    value: string;
    name: string;
  } | null>(null);
  const [level, setLevel] = useState<number>(50);

  const handleAdd = () => {
    if (!selectedSkill) return;

    const name = selectedSkill.value.trim();
    if (!name) return;

    if (skills.find((s) => s.name === name)) return;

    setSkills([...skills, { name, level }]);
    setSelectedSkill(null);
    setLevel(50);
  };

  return (
    <div className={styles.field}>
      <h2>مهارت‌ها</h2>

      {skills.map((skill, index) => (
        <div key={index} className={styles.add}>
          <div className={styles.inputSelect}>
            <Input
              // name="new-skill"
              title=""
              options={defaultSkills}
              type="select"
              // onChange={setSelectedSkill}
              // defaultValue={selectedSkill}
              // disabled={false}
              className={styles.inputSelect}
            />
          </div>
          <div className={styles.inputRange}>
            <input
              type="range"
              value={skill.level}
              min={0}
              max={100}
              disabled
            />
          </div>
        </div>
      ))}

      <div className={styles.add}>
        <Input
          title=""
          options={defaultSkills}
          type="select"
          className={styles.inputSelect}
        />

        <div className={styles.inputRange}>
          <Select></Select>
        </div>
      </div>

      <Button
        onClick={handleAdd}
        variant="primary"
        icon="lineicons:plus"
        title=""
        style={{ fontSize: "24px" }}
      />
    </div>
  );
};

export default Field;
