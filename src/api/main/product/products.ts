import axiosClient from "../../axios/apiClient";

export const productsApi = {
  getCustomer(id: any) {
    const url = `customer/${id}`;
    return axiosClient.get(url, id);
  },

  getAllProducts(params = {}) {
    //@ts-ignore
    const url = `product/all/q?page=${params.page}&limit=${params.limit}`;
    return axiosClient.get(url);
  },

  getOneProduct(id: any) {
    const url = `product/${id}`;
    return axiosClient.get(url, id);
  },

  likeProduct(payload: any) {
    const url = `liked-products`;
    return axiosClient.post(url, payload);
  },

  removeLikedProduct(productId: any, customerId: any) {
    const url = `liked-products/remove/${productId}/${customerId}`;
    return axiosClient.delete(url, productId, customerId);
  },

  getAllCustomerCarts(customerId: any, params = {}) {
    //@ts-ignore
    const url = `cart/all/${customerId}/q?page=${params.page}&limit=${params.limit}`;
    return axiosClient.get(url, customerId);
  },

  addCart(payload: any) {
    const url = `cart/create`;
    return axiosClient.post(url, payload);
  },

  removeCart(id: any) {
    const url = `cart/delete/${id}`;
    return axiosClient.delete(url, id);
  },

  updateCart(payload: any, id: any) {
    const url = `cart/update/${id}`;
    return axiosClient.put(url, payload);
  },
};
