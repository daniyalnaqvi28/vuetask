<template>
    <div class="customsidebar">
 <div class="container">
        <div>
            <nav >
          
            
                <div >
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <RouterLink to="/" class="nav-link active custom-links" aria-current="page" >Products</RouterLink>
                    </li>
                    <hr>
                    <li class="nav-item">
                    <RouterLink to="/create" class="nav-link custom-links" aria-current="page">Create</RouterLink>
                    </li>
                    <hr>
                    <li class="nav-item dropdown">
                    <RouterLink to="/about" class="nav-link custom-links" aria-current="page">About</RouterLink>
                   
                    </li>
                    <hr>
                    
                </ul>
           
           
        </div>
            </nav>  
        </div>
    </div>
        </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
.customsidebar{
    
    background-color: #f8f9fa;
    height: 100vh;
 

}
  @media screen and (max-width: 600px) {
     .customsidebar{
      height: auto;
    }
  }




</style>