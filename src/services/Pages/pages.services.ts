import { urls } from "@/common/urls";
import { IPage } from "@/types/pages.type";
import { ISection } from "@/types/sections.types";
import { SSRget } from "@/utils/fetch";

export const GetPagesAPI = async () => {
  return SSRget<IPage[]>(urls.PAGES.list);
};

export const GetPageAPI = async (slug: string) => {
  const url = urls.PAGES.getBySlug.replace("{slug}", slug);
  console.log(url)
  let response = {
    notFound: false,
    page: {} as IPage,
  };
  try {
    const page = await SSRget<IPage>(url);
    response.page = page;
  } catch (err) {
    response.notFound = true;
  }

  return response;
};
