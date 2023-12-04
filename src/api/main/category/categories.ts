import axiosClient from "../../axios/apiClient";

export const categoriesApi = {
  getAllCategories(params = {}) {
    //@ts-ignore
    const url = `category/all/q?page=${params.page}&limit=${params.limit}`;
    return axiosClient.get(url);
  },

  
};
