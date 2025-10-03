import { urls } from "@/common/urls";
import { IOrder } from "@/types/order.types";
import { postRequest } from "@/utils/axios/axios";

const { ORDERS } = urls;
const { create } = ORDERS;
export const CreateOrderAPI = (data: IOrder) => {
  return postRequest(
    create,
    {
      ...data,
      "product.image": data.product.image,
    },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
};
