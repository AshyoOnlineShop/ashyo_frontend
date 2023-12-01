import axiosClient from "@/api/axios/apiClient";

export const adminApi = {
  getProducts() {
    const url = `/product/all`;
    return axiosClient.get(url);
  },
  AdminLogin(payload: Object){
    const url = "/stuff/signin";
    return axiosClient.post(url, payload)
  }
};
