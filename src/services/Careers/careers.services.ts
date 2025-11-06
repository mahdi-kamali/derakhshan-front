import { urls } from "@/common/urls";
import { ICareer, ICareerApply } from "@/types/careers.types";
import { getRequest, postRequest } from "@/utils/axios/axios";

const { CAREERS } = urls;

const { list, apply } = CAREERS;
export const GetCareeersAPI = () => {
  return getRequest<ICareer[]>(list);
};

export const ApplyToCareerAPI = (data: ICareerApply) => {
  const url = apply.replace("{career_id}", data.career_id);
  return postRequest(url, data);
};
