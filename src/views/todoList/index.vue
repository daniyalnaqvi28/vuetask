<template>
    <div class="container">
                <h3 class="text-center m-5 heading fw-bold">Todo List</h3>

        <section class="card m-3 p-4">
            <div >
                <div class="row">
                    <div class="col-7">
                        <div class="h-100">
                            <div class="d-flex justify-content-right align-items-center gap-10">
                                <img src="@/assets/images/lines.png" alt="">
                                <h5 class="mb-0">Tasks List</h5>
                            </div>
                            <hr>
                            <div class="listing">
                               <template v-if="$store.getters.todo.length!=0">
                                
                          <div class="d-flex align-items-center justify-content-between border rounded mb-3 me-2" v-for="(item,index) in $store.getters.todo" :key="index">
                                <div class="d-flex align-items-center p-2 gap-10">
                                    <p class="dot mb-0">.</p>
                                    <div class="d-flex flex-column">
                                                    <h6 class="mb-0">{{item.title}}</h6>
                                    <p class="mb-0">{{item.description}}</p>
                                    </div>
                                </div>
                                <div>
                                    <div class="d-flex align-items-center me-2 gap-10">
                                        <router-link :to="{name: 'todoEdit',params:{id: index}}">
                                         <img src="@/assets/images/edit.png" alt="">

                                        </router-link>
                                        <img @click="deleteTodo(index)" src="@/assets/images/delete.png" alt="">

                                    </div>
                                </div>
                           </div>
                           
                               </template>  
                               <div v-else>
                                <p class="p-5 text-center">Add a Record</p>
                               </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-5">
                        <div class="h-100">
                           <h5 class="mb-0">Add Tasks</h5>
                           <hr>
                           <div class="form">
                            <div class="my-1">
                                  <input
                                type="text"
                                 placeholder="Add title"
                                 class="form-control"
                                 v-model="title"
                            />
                            </div>
                          <div class="my-2">
                          <textarea v-model="description" id="w3review" name="text" rows="4" cols="50" class="form-control" placeholder="Enter your description..."></textarea>

                          </div>
                          <div class="my-4 text-end">
                            <button class="btn btn-primary" @click="submit">Add</button>
                          </div>
                           </div>
                  
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                id: 0,
            }
        },
        methods:{
            submit(){
                  if (this.title && this.description) { 
                    this.id=this.id+1;
        const newTodo = {
            id: this.id,
          title: this.title,
          description: this.description
        };
        this.$store.dispatch('addTodo',newTodo);
        this.title = null;
        this.description = null;
      } else {
        alert('Please provide both title and description.');
      }

            },
            deleteTodo(id){
                 this.$store.dispatch('deleteTodo',id);
            }
        }
        
    }
</script>

<style >



</style>