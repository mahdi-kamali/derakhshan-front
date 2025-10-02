const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

export const urls = {
  PAGES: {
    list: BASE_URL + "/api/public/pages/",
    getBySlug: BASE_URL + "/api/public/pages/slug?slug={slug}",
  },
  CONTACT_US: {
    create: BASE_URL + "/api/public/contact-us/",
  },
  STORAGE: (path: string) => `${BASE_URL}/${path}`,
};
