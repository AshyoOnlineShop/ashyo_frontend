import axiosClient from "@/api/axios/apiClient";

export const adminApi = {
  getProducts() {
    const url = "/product/all";
    return axiosClient.post(url);
  },
};
