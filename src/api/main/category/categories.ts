// import type { ICustome../../axios/apiClientrom "../../types/customerAuthTypes";
import axiosClient from "../../axios/apiClient";

export const categoriesApi = {
  getAllCategories() {
    const url = "category";
    return axiosClient.post(url);
  },
};
