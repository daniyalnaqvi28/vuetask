<template>
     
 
                <td>{{ title }}</td>
                <td>{{ price }}</td>
                <td  >{{ brand }}</td>
                <td>
                  <RouterLink
                    class="btn btn-success"
                    :to="'/edit/' + id"
                    style="margin: 10px"
                    >Edit</RouterLink
                  >
                  <button
                    @click="deleteProduct(id)"
                    class="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
               
    
</template>

<script setup>
  
        defineProps({
            id: Number,
            title: String,
            brand: String,
            price: Number

        });
        
  
</script>

<style lang="scss" scoped>

</style>