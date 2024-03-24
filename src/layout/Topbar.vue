

<template>
 <header>

    <div class="container">
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
               
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div>{{testProp}}</div>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <RouterLink to="/" class="nav-link active custom-links" aria-current="page">Products</RouterLink>
                    </li>
                    <li class="nav-item">
                    <RouterLink to="/create" class="nav-link custom-links" aria-current="page">Create</RouterLink>
                    </li>
                    <li class="nav-item dropdown">
                     <RouterLink to="/about" class="nav-link custom-links" aria-current="page">About</RouterLink>
                  
                    </li>
                   
                </ul>
                <div class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="searchProduct">
                    <button class="btn btn-outline-success" @click="searchProducts">Search</button>
                </div>
                </div>
            </div>
            </nav>  
        </div>
    </div>

 </header>
</template>

<script>
import HomeViewVue from '../views/HomeView.vue'
    export default {
   data() {
    return {
      
      searchProduct: null,
   
    };
  },
 
  methods: {
    searchProducts(){
        if(this.searchProduct==''){
            this.searchProduct=null;
            this.$emit('clicked', this.searchProduct);
            
        }
        else{

            this.$emit('clicked', this.searchProduct);
        }
    }
  }
        
    }
</script>

<style lang="scss" scoped>

</style>