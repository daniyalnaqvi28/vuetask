<template>
  <div>
    <button class="btn btn-primary" @click="login">Log in</button>
  </div>
</template>

<script>
  import { useAuth0 } from '@auth0/auth0-vue';

  export default {
    setup() {
      const { loginWithRedirect } = useAuth0();
      const token=null;
      return {
        login: () => {
           loginWithRedirect() 
        }
      };
    }
  };
</script>
