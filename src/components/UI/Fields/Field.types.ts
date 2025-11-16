import { CSSProperties, HTMLInputTypeAttribute, ReactElement } from "react";

interface IOption {
  label: string;
  value: any;
}

type INormalField = {
  type?: "text" | "password" | "url" | "email" | "number" | "date" | "tel";
  onChange?: (value: any) => void;
  multiLine?: {
    rows: number;
    cols: number;
  };
  value?: any;
};

type IImageField = {
  type: "image";
  onChange: (value: any) => void;
};

export type ArrayField = {
  type: "array";
  values: any[];
  onRednerRow: (value: any, index: number) => ReactElement | ReactElement[];
  onAddRow: (fieldName: string, index: number) => void;
  onRemoveRow: (fieldName: string, index: number) => void;
};

export type ISelect = {
  type: "select";
  onChange: (value: IOption["value"]) => void;
  options: IOption[];
  value?: IOption;
};

type IBase = INormalField | ArrayField | ISelect | IImageField;

export type IField = {
  name: string;
  title: string;
  icon: ReactElement;
  required?: boolean;
  rtl?: boolean;
  multiLine?: { cols: number; rows: number };
  value?: any;
  onChange?: (value: any) => void;
  errors?: any;
} & CSSProperties &
  IBase;
