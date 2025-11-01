import { Ioption } from "@/components/UI/Fields/Select/Select";
import { IFile } from "./files.types";

export enum INDUSTRY_ENUM {
  FOOD = "FOOD",
  COSMETICS = "COSMETICS",
  HELTHCARE = "HELTHCARE",
  OTHER = "OTHER",
}

export const ORDERS_INDUSTRY_OPTIONS_FA: Ioption[] = [
  {
    label: "صنایع بهداشتی",
    value: INDUSTRY_ENUM.HELTHCARE,
  },
  {
    value: INDUSTRY_ENUM.FOOD,
    label: "صنایع غذایی",
  },
  {
    label: "سنایع آرایشی",
    value: INDUSTRY_ENUM.COSMETICS,
  },
  {
    label: "سایر",
    value: INDUSTRY_ENUM.OTHER,
  },
];
export const ORDERS_INDUSTRY_OPTIONS_EN: Ioption[] = [
  {
    label: "Healthcare Industry",
    value: INDUSTRY_ENUM.HELTHCARE,
  },
  {
    value: INDUSTRY_ENUM.FOOD,
    label: "Food Industry",
  },
  {
    label: "Cosmetics Industry",
    value: INDUSTRY_ENUM.COSMETICS,
  },
  {
    label: "Other",
    value: INDUSTRY_ENUM.OTHER,
  },
];

export interface IOrder {
  _id?: string;
  user: {
    name: string;
    family: string;
    phone: string;
    email: string;
  };
  companyName: string;
  industry: INDUSTRY_ENUM;
  product: {
    image: IFile;
    type: string;
    weight: number;
    quantity: number;
    dimensions: {
      length: number;
      width: number;
      height: number;
    };
  };
  description: string;
}
