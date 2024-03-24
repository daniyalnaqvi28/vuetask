<template>
  <profile-layout>
    <template #centreredcontent>
      <div class="customcontent">
        <!-- <product-form/> -->

        <main class="centerd-text">
          <div class="formstyle">
            <h2>Create Product</h2>
            <div class="formsitems">
              <input
                type="text"
                v-model="state.form.title"
                placeholder="Enter Title"
              />

              <div v-if="v$.form.title.$error">
                <span>
                  {{ "Title" + " " + v$.form.title.$errors[0].$message }}
                </span>
              </div>
            </div>
            <div class="formsitems">
              <input
                type="text"
                v-model="state.form.description"
                placeholder="Enter Description"
              />
              <div v-if="v$.form.description.$error">
                <span>
                  {{
                    "description" +
                    " " +
                    v$.form.description.$errors[0].$message
                  }}
                </span>
              </div>
            </div>
            <div class="formsitems">
              <input
                type="text"
                v-model="state.form.price"
                placeholder="Enter Price"
              />
              <div v-if="v$.form.price.$error">
                <span>
                  {{ "price" + " " + v$.form.price.$errors[0].$message }}
                </span>
              </div>
            </div>
            <div class="formsitems">
              <input
                type="text"
                v-model="state.form.quantity"
                placeholder="Enter Quantity"
              />
              <div v-if="v$.form.quantity.$error">
                <span>
                  {{ "quantity" + " " + v$.form.quantity.$errors[0].$message }}
                </span>
              </div>
            </div>
            <div class="formsitems">
              <input
                type="text"
                v-model="state.form.color"
                placeholder="Enter Color"
              />
              <div v-if="v$.form.color.$error">
                <span>
                  {{ "color" + " " + v$.form.color.$errors[0].$message }}
                </span>
              </div>
            </div>
            <div class="formsitems">
              <select v-model="state.form.brand" id="selectbrand">
                <option value="" disabled>Select a Brand</option>
                <option value="Apple">Apple</option>
                <option value="Lenovo">Lenovo</option>
                <option value="HP">HP</option>
              </select>
              <div v-if="v$.form.brand.$error">
                <span>
                  {{ "brand" + " " + v$.form.brand.$errors[0].$message }}
                </span>
              </div>
            </div>

            <div class="formsitems">
              <button @click="addProduct" class="btn btn-primary">Add</button>
            </div>
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
import { useToast } from "vue-toastification";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { reactive, computed } from "vue";

export default {
  setup() {
    const state = reactive({
      form: {
        title: null,
        description: null,
        price: null,
        quantity: null,
        color: null,
        brand: "",
      },
    });
    const rules = computed(() => {
      return {
        form: {
          title: { required },
          description: { required },
          price: { required },
          quantity: { required },
          color: { required },
          brand: { required },
        },
      };
    });

    const v$ = useVuelidate(rules, state);
    return {
      state,
      v$,
    };
  },

  components: { TopbarVue, Sidebar, FooterVue, ProfileLayout },

  methods: {
    formSubmit() {
      alert("Form Submitted");
    },

    // async addProduct() {
    //   const toast = useToast();
    //   this.v$.$validate();
    //   console.log(this.v$)
    //   if(!this.v$.$error){
    //             // alert("sUCCESSFULLY sUBMIRTED");

    //      await axios
    //     .post("http://localhost:4000/api/product/new_product", {
    //       title: this.state.form.title,
    //       description: this.state.form.description,
    //       color: this.state.form.color,
    //       price: this.state.form.price,
    //       quantity: this.state.form.quantity,
    //       brand: this.state.form.brand,
    //     })
    //     .then((response) => {
    //       console.log(response.data.message);
    //       toast.success("Add Product Successfully");
    //       this.$router.push("/");
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    //   }
    //   else{
    //     alert("form not validate");
    //   }

    // },

    addProduct() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.$store.dispatch("addProducts", this.state.form);
      } else {
      }
    },
  },
};
</script>

<style scoped>
.formsitems {
  margin-top: 20px;
}
</style>
