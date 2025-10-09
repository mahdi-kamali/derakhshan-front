import { IFile } from "./files.types";
import { IProduct } from "./products.types";

export interface ICategory {
  _id: string;
  image: IFile;
  title: string;
  en_title: string;
  products: IProduct[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  description : string
  en_description : string
}
