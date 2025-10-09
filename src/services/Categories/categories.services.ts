import { urls } from "@/common/urls";
import { ICategory } from "@/types/category.types";
import { IProduct } from "@/types/products.types";
import { getRequest } from "@/utils/axios/axios";
import { SSRget } from "@/utils/fetch";

const { categories } = urls.PRODUCTS;
const { list, single } = categories;

export const GetCategoiresAPI = () => {
  return getRequest<ICategory[]>(list);
};

export const GetCategoiryAPI = (_id: ICategory["_id"]) => {
  const url = single(_id);
  console.log(url)
  return SSRget<ICategory>(url);
};
