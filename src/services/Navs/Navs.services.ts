import { urls } from "@/common/urls";
import { IPage } from "@/types/pages.type";
import { getRequest } from "@/utils/axios/axios";

const { NAVS } = urls;
const { list } = NAVS;

export const GetNavsAPI = () => {
  return getRequest<IPage[]>(list);
};
