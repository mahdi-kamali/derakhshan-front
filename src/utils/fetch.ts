export const SSRget = <T = any>(url: string, options?: RequestInit) => {
  return fetch(url, options)
    .then(async (res) => {
      if (res.status === 404) {
        const error = await res.json();
        throw error;
      }
      return res;
    })
    .then((res) => res.json())
    .then((res) => {
      return res.data;
    }) as Promise<T>;
};

export const SSRPost = <T = any>(url: string, options?: RequestInit) => {
  return fetch(url, {
    method: "post",
    ...options,
  })
    .then(async (res) => {
      if (res.status === 404) {
        const error = await res.json();
        throw error;
      }
      return res;
    })
    .then((res) => res.json())
    .then((res) => {
      return res.data;
    }) as Promise<T>;
};


