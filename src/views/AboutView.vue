<template>
  <profile-layout>
    <template #centreredcontent>
      <div class="customcontent">
        <main class="centerd-text">
          <h1 class="custom-font-h1">About Us</h1>
          <p class="custom-font-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            provident, ipsum sed deleniti autem architecto cupiditate
            repellendus. Voluptates perspiciatis sint quaerat, consectetur
            nostrum aliquid, delectus repudiandae maiores aspernatur hic ipsum.
          </p>
          <hr />
          <h2 class="custom-font-h2">Heading Two</h2>
          <p class="custom-font-p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe id
            deleniti alias vel repudiandae fugiat rerum harum dignissimos
            eveniet mollitia, sit cumque possimus, vitae itaque iste aliquam
            voluptate debitis consectetur.
          </p>
        </main>
      </div>
    </template>
  </profile-layout>
</template>

<script>
import TopbarVue from "../layout/Topbar.vue";
import FooterVue from "../layout/Footer.vue";
import Sidebar from "../layout/Sidebar.vue";
import ProfileLayout from "../layout/ProfileLayout.vue";

export default {
  components: { TopbarVue, FooterVue, Sidebar, ProfileLayout },
};
</script>

<style lang="scss" scoped></style>



