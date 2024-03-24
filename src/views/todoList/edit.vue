<template>
    <div class="container">
                <h3 class="text-center m-5 heading fw-bold">Todo List</h3>

        <section class="m-3 p-4">
            <div >
                <div class="d-flex ">
                  
                    <div class="mx-auto card p-4">
                        <div class="h-100">
                           <h5 class="mb-0">Edit Tasks</h5>
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
                            <router-link class="btn btn-primary mx-2" :to="{name: 'todo'}">Home</router-link>
                            <button class="btn btn-primary" @click="update">Update</button>
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
      title: null,
      description: null,
      todo: null,
      id: null,
      objId: null,
    }
  },
  computed: {
    // todos() {
    //   return this.$store.getters.todo;
    // }
  },
  mounted() {
    this.id= this.$route.params.id;
    this.todo= this.$store.getters.todo[this.id];
    console.log(this.todo.title, 'Todo List in Edit Component');
    this.objId=this.todo.id,
    this.title=this.todo.title;
    this.description=this.todo.description;
  },
  methods:{
      update(){
        let updatedTodo={
          id: this.objId,
          title: this.title,
          description :this.description,
        };
        this.$store.dispatch('updateTodo', updatedTodo);
      }
  }
};
</script>
