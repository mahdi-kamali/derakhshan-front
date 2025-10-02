import { urls } from "@/common/urls";
import { IContact } from "@/types/contact-us.types";
import { postRequest } from "@/utils/axios/axios";
import { SSRPost } from "@/utils/fetch";

const { CONTACT_US } = urls;

const { create } = CONTACT_US;
export const CreateContactAPI = (data: IContact) => {
  return postRequest(create, data);
};
