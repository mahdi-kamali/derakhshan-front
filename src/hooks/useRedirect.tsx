import { ICategory } from "@/types/category.types";
import { LanguagesENUM } from "@/types/Language/Language.types";
import { IProduct } from "@/types/products.types";
import { redirect } from "next/navigation";

export default function useRedirect() {
  return {
    GoHome: () => redirect("/FA/home"),
    NotFound: () => redirect("/404"),
    GoProducts: (language: LanguagesENUM) => {
      return {
        list: () => redirect(`/${language}/products`),
        single: (_id: IProduct["_id"]) =>
          redirect(`/${language}/products/${_id}`),
      };
    },
    GoCategory: (language: LanguagesENUM) => {
      return {
        list: () => redirect(`/${language}/categories`),
        single: (cat_id: ICategory["_id"]) =>
          redirect(`/${language}/categories/${cat_id}`),
      };
    },
  };
}
