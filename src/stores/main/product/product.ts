//@ts-nocheck
import { defineStore } from "pinia";
import { productsApi } from "../../../api/main/product/products";

export const useProductStore = defineStore({
  id: "products",
  state: () => {
    return {
      products: null,
      product: null,
      customer: null,
      liked_products: [],
      liked_products_count: null,
      likes_count: null,
      cart_products: null,
      cart_products_count: null,
      sorted_liked_products: [],
      only_liked_products: [],
    };
  },
  actions: {
    async getAllProducts(params) {
      try {
        const data = await productsApi.getAllProducts(params);
        this.products = data.products;
        console.log("Products:", this.products);
        params.last_page = Math.ceil(this.count / params?.limit);
      } catch (error) {
        console.log("Error in product store:", error);
      }
    },

    async getOneProduct(id) {
      try {
        const data = await productsApi.getOneProduct(id);
        this.product = data;
        console.log("Product:", this.product);
      } catch (error) {
        console.log("Error in product store:", error);
      }
    },

    async getCustomer(id) {
      try {
        const data = await productsApi.getCustomer(id);
        this.customer = data;
        this.liked_products = data.liked_products;
        this.liked_products_count = data.liked_products.length;
        this.cart_products_count = data.carts.length;
        console.log("Likes:", this.liked_products_count);

        console.log("Customer:", this.customer);
      } catch (error) {
        console.log("Error in product store:", error);
      }
    },

    async likeProduct(payload) {
      try {
        await productsApi.likeProduct(payload);
        this.liked_products_count++;
      } catch (error) {
        console.log("Error in product store:", error);
      }
    },

    async removeLikedProduct(productId, customerId) {
      try {
        await productsApi.removeLikedProduct(productId, customerId);
        this.liked_products_count--;
      } catch (error) {
        console.log("Error in product store:", error);
      }
    },

    async getLikesCount(count) {
      this.likes_count = count;
      console.log("Likes count from store:", this.likes_count);
    },

    async getAllCustomerCarts(customerId, params) {
      try {
        const data = await productsApi.getAllCustomerCarts(customerId, params);
        this.cart_products = data.carts;
        console.log("Cart Products:", this.cart_products);
        params.last_page = Math.ceil(this.count / params?.limit);
      } catch (error) {
        console.log("Error in product store:", error);
      }
    },

    async getLikedProductsInfo() {
      const likedProductIds = this.liked_products.reduce(
        (map, likedProduct) => {
          map[likedProduct.product_id] = likedProduct.id;
          return map;
        },
        {}
      );

      this.sorted_liked_products = this.products.map((product) => ({
        ...product,
        is_liked: likedProductIds.hasOwnProperty(product.id),
      }));

      this.only_liked_products = this.sorted_liked_products.filter(
        (product) => product.is_liked === true
      );

      console.log("Sorted liked products:", this.sorted_liked_products);
      console.log("Only liked products:", this.only_liked_products);
    },
  },
});
