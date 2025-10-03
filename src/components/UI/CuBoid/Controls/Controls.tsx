import React, { ChangeEvent } from "react";
import styles from "./styles.module.scss";

type Rotation = {
  x: number;
  y: number;
};

type ControlsProps = {
  debug?: boolean;
  width: number;
  setWidth: (val: number) => void;
  height: number;
  setHeight: (val: number) => void;
  depth: number;
  setDepth: (val: number) => void;
  rotation: Rotation;
  setRotation: (val: Rotation) => void;
};

export default function Controls({
  width,
  setWidth,
  height,
  setHeight,
  depth,
  setDepth,
  rotation,
  setRotation,
}: ControlsProps) {
  const handleRange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    const numericValue = Number(value);

    switch (id) {
      case "width":
        setWidth(numericValue);
        break;
      case "height":
        setHeight(numericValue);
        break;
      case "depth":
        setDepth(numericValue);
        break;
      case "rotateX":
        setRotation({ ...rotation, x: numericValue });
        break;
      case "rotateY":
        setRotation({ ...rotation, y: numericValue });
        break;
    }
  };

  return (
    <div className={styles.controls}>
      <fieldset>
        <legend>ابعاد</legend>
        <div className={styles.fields}>
          {[
            { label: "ارتفاع", id: "height", value: height, min: 1, max: 500 },
            { label: "عرض", id: "width", value: width, min: 1, max: 500 },
            { label: "عمق", id: "depth", value: depth, min: 1, max: 500 },
          ].map((item) => (
            <div className={styles.field} key={item.id}>
              <label>{item.label}</label>
              <input
                type='range'
                id={item.id}
                value={item.value}
                onChange={handleRange}
                min={item.min}
                max={item.max}
              />
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
