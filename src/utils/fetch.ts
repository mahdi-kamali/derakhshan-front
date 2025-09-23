export const SSRget = <T = any>(url: string, options?: RequestInit) => {
  return fetch(url, options)
    .then((res) => res.json())
    .then((res) => {
      return res.data;
    }) as Promise<T>;
};
