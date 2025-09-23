import { urls } from "@/common/urls";
import { IPage } from "@/types/pages.type";
import { ISection } from "@/types/sections.types";
import { SSRget } from "@/utils/fetch";

export const GetPagesAPI = async () => {
  return SSRget<IPage[]>(urls.PAGES.list);
};

export const GetPageAPI = (slug: string) => {
  const url = urls.PAGES.getBySlug.replace("{slug}", slug);
  return SSRget<IPage>(url);
};
