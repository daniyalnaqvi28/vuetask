<template v-if="isAuthenticated">
  <div>
 <LoginVue/>
 <LogoutVue/>
 <!-- <SignupVue/> -->
  </div>
</template>

<script>
import LoginVue from '../components/Login.vue'
import LogoutVue from '../components/Logout.vue'
// import SignupVue from '../components/Signup.vue'
import{useAuth0} from '@auth0/auth0-vue';
   export default {
    data() {
    return {
       isAuthenticated: useAuth0(),

    }
    },
    components:{LoginVue,LogoutVue  }
    
  }
</script>

<style   scoped>

</style>