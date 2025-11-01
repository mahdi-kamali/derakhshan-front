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
  type: string;
  _id: string;
}
