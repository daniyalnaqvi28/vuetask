<template>
  <profile-layout>
    <template #centreredcontent>
      <div class="customcontent">
        <main class="centerd-text">
          <div class="formstyle">
            <h2>Edit Product</h2>
            <div class="formsitems">
              <input type="text" v-model="title" placeholder="Enter Title" />
            </div>

            <div class="formsitems">
              <input type="text" v-model="price" placeholder="Enter Price" />
            </div>
            <div class="formsitems">
              <input
                type="text"
                v-model="quantity"
                placeholder="Enter Quantity"
              />
            </div>
            <div class="formsitems">
              <input type="text" v-model="color" placeholder="Enter Color" />
            </div>
            <div class="formsitems">
              <select v-model="brand" id="selectbrand">
                <option value="" disabled>Select a Brand</option>
                <option value="Apple">Apple</option>
                <option value="Lenovo">Lenovo</option>
                <option value="HP">HP</option>
              </select>
            </div>

            <div class="formsitems">
              <button @click="editProduct" class="btn btn-primary">Edit</button>
            </div>
            <p>{{ sum }}</p>
          </div>
        </main>
      </div>
    </template>
  </profile-layout>
</template>

<script>
import FooterVue from "../../layout/Footer.vue";
import TopbarVue from "../../layout/Topbar.vue";
import Sidebar from "../../layout/Sidebar.vue";
import ProfileLayout from "../../layout/ProfileLayout.vue";
import axios from "axios";

export default {
  data() {
    return {
      title: null,
      description: null,
      price: null,
      quantity: null,
      color: null,
      brand: "",
      firstname: null,
      lastname: null,
      courses: "",
      tempSkills: "",
      skills: [],
      productID: "",
    };
  },
  components: { TopbarVue, Sidebar, FooterVue, ProfileLayout },
  created() {
    this.productID = this.$route.params.id;
  },
  mounted() {
    this.GetProduct();
  },
  methods: {
    formSubmit() {
      alert("Form Submitted");
    },

    async GetProduct() {
      await axios
        .get(
          `http://localhost:4000/api/product/single_product/${this.productID}`
        )
        .then((response) => {
          this.products = response.data;
          //   console.log(this.products);
          this.title = this.products.title;
          this.description = this.products.description;
          this.color = this.products.color;
          this.price = this.products.price;
          this.quantity = this.products.quantity;
          this.brand = this.products.brand;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    editProduct() {
      axios
        .put(
          `http://localhost:4000/api/product/edit_product/${this.productID}`,
          {
            title: this.title,
            description: this.description,
            color: this.color,
            price: this.price,
            quantity: this.quantity,
            brand: this.brand,
          }
        )
        .then((response) => {
          this.$router.push("/");
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.formsitems {
  margin-top: 20px;
}
</style>
