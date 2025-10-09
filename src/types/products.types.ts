import { IFile } from "./files.types";

export interface IProduct {
  title: string;
  en_title: string;
  gallery: IFile[];
  image: IFile;
  description: string;
  en_description: string;
  _id?: string;
  createdAt: string;
  updatedAt: string;
}
