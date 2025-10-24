import { IFile } from "./files.types";

interface ISocial {
  label: string;
  icon: string;
  url: string;
}

interface ILink {
  label: string;
  icon: string;
  href: string;
}

interface ITrust {
  image: IFile;
  href: string;
}

export interface ISiteSettings {
  EN: {
    socials: ISocial[];
    links: ILink[];
    phone: string;
    email: string;
    address: string;
    work_time: string;
    trusts: ITrust[];
  };
  FA: {
    socials: ISocial[];
    links: ILink[];
    phone: string;
    email: string;
    address: string;
    work_time: string;
    trusts: ITrust[];
  };
}
