import { ISection } from "./sections.types";

export interface IPage {
  _id: string;
  title: string;
  slug: string;
  sections: ISection[];
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
