import { urls } from "@/common/urls";
import { ISiteSettings } from "@/types/site_settings.types";
import { getRequest } from "@/utils/axios/axios";

const { SITE_SETTINGS } = urls;
const { list } = SITE_SETTINGS;

export const GetSiteSettingsAPI = () => {
  return getRequest<ISiteSettings>(list);
};
