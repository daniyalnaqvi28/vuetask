<template>
  <button @click="HandleSignup">Signup</button>
</template>

<script>

import {useAuth0} from '@auth0/auth0-vue';
const {loginWithRedirect} = useAuth0();
    export default {

      methods:{
        HandleSignup(){


        loginWithRedirect({
          appState: {
            target: '/profile'
          },
          authorizationParams:{
                screen_hint: 'signup',
          }
        });
        }
      }

    }
</script>

<style scoped></style>
