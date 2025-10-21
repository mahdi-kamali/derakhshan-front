import { urls } from "@/common/urls";
import { ICareer } from "@/types/careers.types";
import { getRequest } from "@/utils/axios/axios";

const { CAREERS } = urls;

const { list } = CAREERS;
export const GetCareeersAPI = () => {
  return getRequest<ICareer[]>(list);
};
