// import type { ICustome../../axios/apiClientrom "../../types/customerAuthTypes";
import axiosClient from "../../axios/apiClient";

export const brandsApi = {
  getAllBrands(params = {}) {
    //@ts-ignore
    const url = `brand/all/q?page=${params.page}&limit=${params.limit}`;
    return axiosClient.get(url);
  },
};
