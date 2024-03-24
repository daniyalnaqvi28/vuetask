<template>

  <main>
    <div class="grid-container">
      <div class="item1"><topbar-vue @clicked="handleSearchProduct" /></div>
      <div class="item2"><sidebar-vue /></div>
      <div class="item3">
        <div class="centreredcontent">
          <slot name="centreredcontent"></slot>
        </div>
      </div>
      <div class="item4"><footer-vue /></div>

      
    </div>
  </main>
</template>

<script >
  

import maincss from '../../src/assets/main.css?inline'
import FooterVue from "./Footer.vue";
import SidebarVue from "./Sidebar.vue";
import TopbarVue from "./Topbar.vue";
export default {
  data() {
    return {
   
      searchProduct: null,
    
    };
   
  },
  components: { FooterVue, SidebarVue, TopbarVue },
  methods: {
    handleSearchProduct(message) {
      this.searchProduct = message;
       this.$emit('customEvent', this.searchProduct);
    },
  }
};


</script>

<style scoped></style>
