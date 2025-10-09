import { urls } from "@/common/urls";
import { IProduct } from "@/types/products.types";
import { getRequest } from "@/utils/axios/axios";

const { PRODUCTS } = urls;
const { list, getBySlug } = PRODUCTS;
export const GetProductsAPI = () => {
  return getRequest<IProduct[]>(list);
};

export const GetProductByIdAPI = (_id: IProduct["_id"]) => {
  const url = getBySlug(_id as string);
  return getRequest<IProduct>(url);
};
