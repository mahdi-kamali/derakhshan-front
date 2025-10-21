import { ICategory } from "@/types/category.types";
import { IProduct } from "@/types/products.types";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

export const urls = {
  PAGES: {
    list: BASE_URL + "/api/public/pages/",
    getBySlug: BASE_URL + "/api/public/pages/slug?slug={slug}",
  },
  CONTACT_US: {
    create: BASE_URL + "/api/public/contact-us/",
  },
  ORDERS: {
    create: BASE_URL + "/api/public/order/",
  },
  PRODUCTS: {
    list: BASE_URL + "/api/public/products/",
    getBySlug: (_id: IProduct["_id"]) =>
      BASE_URL + `/api/public/products/${_id}`,
    categories: {
      list: BASE_URL + "/api/public/products/categories",
      single: (_id: ICategory["_id"]) =>
        BASE_URL + `/api/public/products/categories/${_id}`,
    },
  },
  NAVS: {
    list: BASE_URL + "/api/public/navs/",
  },
  CAREERS: {
    list: BASE_URL + "/api/public/careers",
  },
  STORAGE: (path: string) => `${BASE_URL}/${path}`,
};
