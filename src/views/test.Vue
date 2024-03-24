        <!-- pinia used -->
         <!--   <div>
                      <button @click="filter='all'">All</button>
         <button @click="filter='fav'">Favs</button>

          </div>
          <div class="piniaproducts"  v-if="filter==='all'">
            <div v-for="product in productStore.tasks" :key="product.id">
              <h2>{{ product.title }}</h2>
            </div>
            <hr />
  
          </div>
           <div class="piniaproducts" v-if="filter==='fav'">
            <div v-for="product in productStore.favs" :key="product.id" >
              <h2>{{ product.title }}</h2>
            </div>
            </div>  
           <button @click="fetchData">Fetch Data</button>
          <p v-if="data">{{ data }}</p>  
   
   
    <table class="table">
              <thead>
                <tr>
                  <th>Model</th>
                  <th>Price</th>
                  <th>Brand</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tr v-for="product in filteredProducts" :key="product._id">
                <td>{{ product.title }}</td>
                <td>{{ product.price }}</td>
                <td :class="statusStyle(product.brand)">{{ product.brand }}</td>
                <td>
                  <RouterLink
                    class="btn btn-success"
                    :to="'/edit/' + product._id"
                    style="margin: 10px"
                    >Edit</RouterLink
                  >
                  <button
                    @click="deleteProduct(product._id)"
                    class="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </table> -->

 
    // async deleteProduct(product_id) {
    //   const toast = useToast();
    //   try {
    //     const response = await axios.delete(
    //       `http://localhost:4000/api/product/delete_product/${product_id}`
    //     );
    //     this.$router.push("/");
    //     console.log(response);
    //     this.fetchProducts();
    //     // this.triggerToast();
    //     this.toast.error("Product Deleted");
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
                // Testing

    // fetchData() {
    //   const respone = fetch(
    //     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    //   );

    //   console.log(respone.json());
    // },

//  sdsd

<script>
import { useAuth0 } from "@auth0/auth0-vue";
import LoginVue from "../components/Login.vue";
import LogoutVue from "../components/Logout.vue";
import { stringifyQuery } from "vue-router";
import axios from "axios";
import { ref } from "vue";
import ProfileLayout from "../layout/ProfileLayout.vue";
import Login from "../components/Login.vue";
import Logout from "../components/Logout.vue";
import { useToast } from "vue-toastification";
import { piniaProductStore } from "../store/PiniaProductStore";
import ViewProducts from "../views/products/ViewProducts.vue";
export default {
  setup() {
    const { loginWithRedirect, user, isAuthenticated } = useAuth0();
    const productStore = piniaProductStore();
    const filter = ref("fav");
    const toast = useToast();
setTimeout(() => {
  const box = document.getElementById('loginbutton');

   box.style.display = 'none';
 }, 1000);
    return {
      login: () => {
        Login;
      },
      user,
      isAuthenticated,
      productStore,
      filter,
      toast,
    };
  },
  data() {
    return {
      msg: "Text_true",
      searchProduct: null,
      condition: false,
      answer: {},
      filterState: "all",
      data: null,
      avgAge: 0,
    };
  },
  components: { ProfileLayout, LoginVue, LogoutVue,ViewProducts },

  computed: {
    filteredProducts() {
      if (this.searchProduct === null) {
        if (this.filterState === "Apple") {
          return this.products.filter((product) => product.brand === "Apple");
        } else if (this.filterState === "Lenovo") {
          return this.products.filter((product) => product.brand === "Lenovo");
        } else if (this.filterState === "HP") {
          return this.products.filter((product) => product.brand === "HP");
        } else {
          return this.products;
        }
      } else {
        return this.products.filter(
          (product) => product.title === this.searchProduct
        );
      }
    },

    products() {
      return this.$store.getters.products;
    },
  },
  mounted() {
    // alert("here")
    this.fetchProducts();
  },
  methods: {
    handleSearchProduct(message) {
      this.searchProduct = message;
    },
    fetchProducts() {
      this.$store.dispatch("fetchProducts");
    },

    statusStyle(status) {
      if (status === "Apple") {
        return "Apple";
      } else if (status === "Lenovo") {
        return "Lenovo";
      } else {
        return "HP";
      }
    },
    filterProducts(filter) {
      this.filterState = filter;
    },

    deleteProduct(product_id) {
      this.$store.dispatch("deleteProduct", product_id);
    },
  },
};
</script>



    // home view




    <template>
  <profile-layout @customEvent="handleSearchProduct">
    <template #centreredcontent>
      <div class="customcontent">
        <main class="centerd-text">
     <div style="padding: 10px" class="btn-group btn-group-justified">
          <div class="btn-group">
            <button @click="filterProducts('all')" class="btn btn-dark">
              All
            </button>
              </div>
            <div class="btn-group">
            <button
              @click="filterProducts('Apple')"
              class="btn btn-outline-secondary filterbutton"
            >
              Apple
            </button>
              </div>
            <div class="btn-group">
            <button
              @click="filterProducts('Lenovo')"
              class="btn btn-outline-secondary"
            >
              Lenovo
            </button>
              </div>
            <div class="btn-group">
            <button
              @click="filterProducts('HP')"
              class="btn btn-outline-secondary"
            >
              HP
            </button>
          </div>
          </div>

          <div class="table-container">
            <table class="table">
              <thead>
                <tr>
                  <th>Model</th>
                  <th>Price</th>
                  <th>Brand</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in filteredProducts" :key="product._id">
                  <view-products
                    :id="product._id"
                    :title="product.title"
                    :brand="product.brand"
                    :price="product.price"
                  />
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </template>
  </profile-layout>
</template>

<script>
import ProfileLayout from "../layout/ProfileLayout.vue";
import axios from "axios";
import { useToast } from "vue-toastification";
import { stringifyQuery } from "vue-router";
import { piniaProductStore } from "../store/PiniaProductStore";
import ViewProducts from "../views/products/ViewProducts.vue";
import { ref } from "vue";
export default {
  setup() {
    const productStore = piniaProductStore();
    const filter = ref("fav");

    const toast = useToast();
    return { toast, productStore, filter };
  },
  data() {
    return {
      msg: "Text_true",
      searchProduct: null,
      condition: false,
      answer: {},
      filterState: "all",
      data: null,
      avgAge: 0,
    };
  },
  components: { ProfileLayout, ViewProducts },

  computed: {
    filteredProducts() {
      if (this.searchProduct === null) {
        if (this.filterState === "Apple") {
          return this.products.filter((product) => product.brand === "Apple");
        } else if (this.filterState === "Lenovo") {
          return this.products.filter((product) => product.brand === "Lenovo");
        } else if (this.filterState === "HP") {
          return this.products.filter((product) => product.brand === "HP");
        } else {
          return this.products;
        }
      } else {
        return this.products.filter(
          (product) => product.title === this.searchProduct
        );
      }
    },

    products() {
      return this.$store.getters.products;
    },
  },
  mounted() {
    // alert("here")
    this.fetchProducts();
  },
  methods: {
    //
    handleSearchProduct(message) {
      this.searchProduct = message;
    },
    fetchProducts() {
      this.$store.dispatch("fetchProducts");
    },

    statusStyle(status) {
      if (status === "Apple") {
        return "Apple";
      } else if (status === "Lenovo") {
        return "Lenovo";
      } else {
        return "HP";
      }
    },
    filterProducts(filter) {
      this.filterState = filter;
    },


    deleteProduct(product_id) {
      this.$store.dispatch("deleteProduct", product_id);
    },

 
  },
};
</script>

<style>
.table-container {
  max-height: 400px;
  overflow-y: auto;
}
</style>











//   import { useAuth0 } from '@auth0/auth0-vue';

//   export default {
//     setup() {
//       const { loginWithRedirect } = useAuth0();

//       return {
//         login: () => {
//           loginWithRedirect();
//         }
//       };
//     }
//   };





eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InVBdXRMaUdhWl9wd3l0OTR0c09hbyJ9.eyJuaWNrbmFtZSI6ImFsaS5kYW5peWFsIiwibmFtZSI6ImFsaS5kYW5peWFsQHBpeGFyc2FydC5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9zLmdyYXZhdGFyLmNvbS9hdmF0YXIvNmViMzRiYjI0MDFmZjQ1ZGFhOGI2YTY1Mzg1ZjQ3MDE_cz00ODAmcj1wZyZkPWh0dHBzJTNBJTJGJTJGY2RuLmF1dGgwLmNvbSUyRmF2YXRhcnMlMkZhbC5wbmciLCJ1cGRhdGVkX2F0IjoiMjAyMy0xMS0yMVQxMTo1OTozMS44NTdaIiwiZW1haWwiOiJhbGkuZGFuaXlhbEBwaXhhcnNhcnQuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOi8vZGV2LWI1ZXlmaHZ5Z2J2NXN2amIudXMuYXV0aDAuY29tLyIsImF1ZCI6IjkzWGR2Z1lqVlVmbVUxaEdoalJJbVJpNHBqNW5JdDFiIiwiaWF0IjoxNzAwNTY4NDQ4LCJleHAiOjE3MDA2MDQ0NDgsInN1YiI6ImF1dGgwfDY1NWIyZjNjMDIyYTlmYzNiZTliMTRhMCIsInNpZCI6IkdiS3I3dF8wcTZJeEdDeWlrcnB0Tm0ycFdISV9jLUpMIiwibm9uY2UiOiJiR055VjNaUGRuNHphemxZV2kxQ1pURlFOREpTUlV3NVFpNVJNVFJsU21wNFQzTjNNVkpNVVdWNVRRPT0ifQ.nxGvuEpbfCyEz8pOKK5owapLbJ6Pi-vMT_ucQFvwBEsQRnQyLXQ2CtqwbDn6exQh-iP8hNmistSlCNXDBn0rr2dpxlPZauRR7MH8r8GzkLToXhELGSBlFFATf_OMMbsj3IeevHLVCoFnhdYcfO6kH9kEIqP4CHViU-glk3h9RbIL2IxaMTOuCDlIqzFOsIaHWKNBN6fV8pgUty0HkgmeFswqq57g690ZIuryRoM-ASE0DC2zQUAayjSbqShxmBR4uSFphnaqHNbhgcnZBOeHLcROcrXDYeK4en4hzLieUEym52Iy5AfuBvshS_rnAz4KxGeJzgqkf3qYuIJWgEvlkA
eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InVBdXRMaUdhWl9wd3l0OTR0c09hbyJ9.eyJuaWNrbmFtZSI6ImFsaS5kYW5peWFsIiwibmFtZSI6ImFsaS5kYW5peWFsQHBpeGFyc2FydC5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9zLmdyYXZhdGFyLmNvbS9hdmF0YXIvNmViMzRiYjI0MDFmZjQ1ZGFhOGI2YTY1Mzg1ZjQ3MDE_cz00ODAmcj1wZyZkPWh0dHBzJTNBJTJGJTJGY2RuLmF1dGgwLmNvbSUyRmF2YXRhcnMlMkZhbC5wbmciLCJ1cGRhdGVkX2F0IjoiMjAyMy0xMS0yMVQxMTo1OTozMS44NTdaIiwiZW1haWwiOiJhbGkuZGFuaXlhbEBwaXhhcnNhcnQuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOi8vZGV2LWI1ZXlmaHZ5Z2J2NXN2amIudXMuYXV0aDAuY29tLyIsImF1ZCI6IjkzWGR2Z1lqVlVmbVUxaEdoalJJbVJpNHBqNW5JdDFiIiwiaWF0IjoxNzAwNTY4NDQ4LCJleHAiOjE3MDA2MDQ0NDgsInN1YiI6ImF1dGgwfDY1NWIyZjNjMDIyYTlmYzNiZTliMTRhMCIsInNpZCI6IkdiS3I3dF8wcTZJeEdDeWlrcnB0Tm0ycFdISV9jLUpMIiwibm9uY2UiOiJiR055VjNaUGRuNHphemxZV2kxQ1pURlFOREpTUlV3NVFpNVJNVFJsU21wNFQzTjNNVkpNVVdWNVRRPT0ifQ.nxGvuEpbfCyEz8pOKK5owapLbJ6Pi-vMT_ucQFvwBEsQRnQyLXQ2CtqwbDn6exQh-iP8hNmistSlCNXDBn0rr2dpxlPZauRR7MH8r8GzkLToXhELGSBlFFATf_OMMbsj3IeevHLVCoFnhdYcfO6kH9kEIqP4CHViU-glk3h9RbIL2IxaMTOuCDlIqzFOsIaHWKNBN6fV8pgUty0HkgmeFswqq57g690ZIuryRoM-ASE0DC2zQUAayjSbqShxmBR4uSFphnaqHNbhgcnZBOeHLcROcrXDYeK4en4hzLieUEym52Iy5AfuBvshS_rnAz4KxGeJzgqkf3qYuIJWgEvlkA