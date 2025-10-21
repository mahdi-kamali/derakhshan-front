

export interface ICareer {
  _id: string;
  title: string;
  skills: string[];
  description: string;
  isActive: boolean;
  image: Image;
  createdAt: string;
  updatedAt: string;
  __v: number;
  type: string;
}

interface Image {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v?: number;
}