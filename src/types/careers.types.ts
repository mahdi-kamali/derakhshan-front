import { IFile } from "./files.types";

export interface ICareer {
  _id?: string;
  EN: IData;
  FA: IData;
}

interface IData {
  title: string;
  skills: string[];
  description: string;
  isActive: boolean;
  image: IFile;
  type: "SPECIAL" | "NORMAL";
  _id: string;
}

export interface IcareerApply {
  career_id: string;
  address: string;
  description: string;
  family: string;
  name: string;
  phone: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
