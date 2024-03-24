import { createApp } from "vue";
import { createStore } from "vuex";
import axios from "axios";
import { useToast } from "vue-toastification";
import router  from '../router';

export const productStore = createStore({
  state: {
    allproducts: [],
  },
  getters: {
    products: (state) => state.allproducts,
  },
  mutations: {
    productsData(state, allproducts) {
      state.allproducts = allproducts;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/product/all_products"
        );
        commit("productsData", response.data);
      } catch (error) {
        console.error(error);
      }
    },

    createHomework({ commit, state }) {
      axios
        .post("/api/homework", {
          homework_title: state.postTitle,
        })
        .then((res) => {
          commit("updateHomework", "");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async addProducts({ commit }, form) {
      const toast = useToast();
      try {
        const response = await axios.post(
          "http://localhost:4000/api/product/new_product",
          {
            title: form.title,
            description: form.description,
            color: form.color,
            price: form.price,
            quantity: form.quantity,
            brand: form.brand,
          }
        );
        commit("productsData", response.data);
        toast.success("Add Product Successfully");
         router.push("/");
      } catch (error) {
        console.error(error);
      }
    },

    async deleteProduct({ commit,dispatch }, product_id) {
      const toast = useToast();
      try {
        const response = await axios.delete(
          `http://localhost:4000/api/product/delete_product/${product_id}`
        );
         toast.error("Product Deleted");
         dispatch('fetchProducts');
         router.push("/");
         
      } catch (error) {
        console.log(error);
      }
    },

    
  },
});
