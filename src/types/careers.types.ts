import { IFile } from "./files.types";

interface IData {
  title: string;
  skills: string[];
  description: string;
  isActive: boolean;
  image: IFile;
  type: "SPECIAL" | "NORMAL";
  _id: string;
}

export interface ICareer {
  _id: string;
  EN: IData;
  FA: IData;
}

export interface ICareerApply {
  career_id: ICareer["_id"];
  personalInfo: PersonalInfo;
  education: Education[];
  workExperience: WorkExperience;
  skills: Skill[];
  software: Skill[];
  languages: Skill[];
  description: string;
  expectedSalary: string;
}

interface Skill {
  name: string;
  level: string;
}

interface WorkExperience {
  lastSalary: string;
  insuranceDuration: string;
  usedUnemploymentInsurance: string;
  works: IWork[];
}

export interface IWork {
  organization?: string;
  role?: string;
  duration?: string;
  terminationReason?: string;
}
interface Education {
  fieldOfStudy: string;
  level: string;
  gpa: string;
  institute: string;
}

interface PersonalInfo {
  fullName: string;
  nationalId: string;
  birthDate: string;
  birthPlace: string;
  issuePlace: string;
  maritalStatus: string;
  militaryStatus: string;
  fatherName: string;
  fatherJob: string;
  insuranceHistory: string;
  phoneNumber: string;
}
