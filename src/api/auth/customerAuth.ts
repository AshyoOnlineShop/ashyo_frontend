import axiosClient from "@/api/axios/apiClient";
import type { ICustomerSigninPayload } from "../../types/customerAuthTypes";

export const customerAuthApi = {
  signin(payload: ICustomerSigninPayload) {
    const url = "customer/signin";
    return axiosClient.post(url, payload);
  },
};
