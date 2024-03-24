     <template>
   <!-- <div id="loginbutton" class="text-center" v-if="!isAuthenticated && showLogin">
    <LoginVue />
  </div> -->
  <!-- <div class="ring" v-if=" !showLogin">Loading
  <span></span>
</div> -->

<!-- <div  v-if="isAuthenticated">
{{token}}
<logout-vue/>
</div> -->
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
      <div>
      <!-- <logout-vue/> -->

      </div>
    </template>
  </profile-layout>
</template>
<script>
// import { useAuth0 } from "@auth0/auth0-vue";
// import LoginVue from "../components/Login.vue";
// import LogoutVue from "../components/Logout.vue";
import { stringifyQuery } from "vue-router";
import axios from "axios";
import { ref } from "vue";
import ProfileLayout from "../layout/ProfileLayout.vue";
// import Login from "../components/Login.vue";
// import Logout from "../components/Logout.vue";
import { useToast } from "vue-toastification";
import { piniaProductStore } from "../store/PiniaProductStore";
import ViewProducts from "../views/products/ViewProducts.vue";
export default {
  setup() {
    // const { loginWithRedirect, user, isAuthenticated } = useAuth0();
    const productStore = piniaProductStore();
    const filter = ref("fav");
    const toast = useToast();
    // const checkToken=useAuth0();
    //  const { getTokenSilently } = useAuth0();
    //  let token=null;
    
      //  token = checkToken.idTokenClaims._rawValue.__raw;
    //  console.log("first here",checkToken  )
    //  console.log("second here",checkToken.idTokenClaims)
    //  console.log("third here",checkToken.idTokenClaims._rawValue.__raw )

  
    return {
      // login: () => {
      //   Login;
      // },
      // user,
      // isAuthenticated,
      productStore,
      filter,
      toast,
      checkToken
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
      showLogin: true
      
    };
  },
  components: { ProfileLayout,ViewProducts },

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
//     this.fetchProducts();
//     setTimeout(() => {
//   this.showLogin=true;
// }, 2000); 
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
<style>
/* 
.table-container {
  max-height: 400px;
  overflow-y: auto;
}




.ring
{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  width:150px;
  height:150px;
  background:transparent;
  border:3px solid #3c3c3c;
  border-radius:50%;
  text-align:center;
  line-height:150px;
  font-family:sans-serif;
  font-size:20px;
  color:#fff000;
  letter-spacing:4px;
  text-transform:uppercase;
  text-shadow:0 0 10px #fff000;
  box-shadow:0 0 20px rgba(0,0,0,.5);
}
.ring:before
{
  content:'';
  position:absolute;
  top:-3px;
  left:-3px;
  width:100%;
  height:100%;
  border:3px solid transparent;
  border-top:3px solid #fff000;
  border-right:3px solid #fff000;
  border-radius:50%;
  animation:animateC 2s linear infinite;
}
span
{
  display:block;
  position:absolute;
  top:calc(50% - 2px);
  left:50%;
  width:50%;
  height:4px;
  background:transparent;
  transform-origin:left;
  animation:animate 2s linear infinite;
}
span:before
{
  content:'';
  position:absolute;
  width:16px;
  height:16px;
  border-radius:50%;
  background:#fff000;
  top:-6px;
  right:-8px;
  box-shadow:0 0 20px #fff000;
}
@keyframes animateC
{
  0%
  {
    transform:rotate(0deg);
  }
  100%
  {
    transform:rotate(360deg);
  }
}
@keyframes animate
{
  0%
  {
    transform:rotate(45deg);
 }
  100%
  {
    transform:rotate(405deg);
  }
} */

</style>
