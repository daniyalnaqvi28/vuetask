<template>
  <div class="container">
    <h3 class="text-center m-5 heading fw-bold">Todo List</h3>

    <section class="card m-3 p-4">
      <div>
        <div class="row">
          <div class="col-7">
            <div class="h-100">
              <div
                class="d-flex justify-content-right align-items-center gap-10"
              >
                <img src="@/assets/images/lines.png" alt="" />
                <h5 class="mb-0">Tasks List</h5>
              </div>
              <hr />
              <div class="listing">
                <template v-if="this.todoList.length != 0">
                  <div
                    class="d-flex align-items-center justify-content-between border rounded mb-3 me-2"
                    v-for="(item, index) in todoList"
                    :key="index"
                  >
                    <div class="d-flex align-items-center p-2 gap-10">
                      <p class="dot mb-0">.</p>
                      <div class="d-flex flex-column">
                        <h6 class="mb-0">{{ item.title }}</h6>
                        <p class="mb-0">{{ item.description }}</p>
                      </div>
                    </div>
                    <div>
                      <div class="d-flex align-items-center me-2 gap-10">
                        <img
                          src="@/assets/images/edit.png"
                          alt=""
                          @click="edit(index)"
                        />

                        <img
                          @click="deleteTodo(index)"
                          src="@/assets/images/delete.png"
                          alt=""
                        />
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
              <h5 class="mb-0">{{ formHeading }}</h5>
              <hr />
              <div class="form">
                <div class="my-1">
                  <input
                    type="text"
                    placeholder="Add title"
                    class="form-control"
                    v-model="title"
                  />
                  <div class="input-errors" v-if="submitted && v$.title.$error">
                    <div class="error-msg" v-if="v$.title.required">
                      Title is required
                    </div>
                  </div>
                </div>
                <div class="my-2">
                  <textarea
                    v-model="description"
                    id="w3review"
                    name="text"
                    rows="4"
                    cols="50"
                    class="form-control"
                    placeholder="Enter your description..."
                  ></textarea>
                  <div
                    class="input-errors"
                    v-if="submitted && v$.description.$error"
                  >
                    <div class="error-msg" v-if="v$.description.required">
                      Description is required
                    </div>
                  </div>
                </div>
                <div class="my-4 text-end">
                  <div v-if="!isEdit">
                    <button class="btn btn-primary" @click="submit">Add</button>
                  </div>
                  <div v-else>
                    <button class="btn btn-primary mx-2" @click="backToAdd">
                      Back
                    </button>

                    <button class="btn btn-primary" @click="update">
                      Update
                    </button>
                  </div>
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
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      id: 0,
      todoList: [],
      title: null,
      description: null,
      submitted: false,
      isEdit: false,
      editId: null,
      formHeading: "Add Tasks",
    };
  },
  validations() {
    return {
      title: { required },
      description: { required },
    };
  },
  methods: {
    submit() {
      this.submitted = true;
      this.v$.$touch();

      if (this.v$.$invalid) {
        return;
      } else {
        const newTodo = {
          title: this.title,
          description: this.description,
        };
        this.todoList.push(newTodo);
        this.title = null;
        this.description = null;
        this.submitted = false;
      }
    },
    edit(id) {
      this.isEdit = true;
      this.formHeading = "Edit Task";
      this.editId = id;
      const todo = this.todoList[this.editId];
      this.title = todo.title;
      this.description = todo.description;
    },
    update() {
      this.submitted = true;
      this.v$.$touch();

      if (this.v$.$invalid) {
        return;
      } else {
        let updatedTodo = {
          title: this.title,
          description: this.description,
        };
        const index = this.editId;
        if (index !== -1) {
          this.todoList.splice(index, 1, updatedTodo);
          this.submitted = false;
        } else {
          console.error("Todo not found!");
        }
      }
    },
    backToAdd() {
      this.isEdit = false;
      this.formHeading = "Add Tasks";
      this.title = null;
      this.description = null;
    },
    deleteTodo(id) {
      alert("are you sure to delete");
      this.todoList.splice(id, 1);
    },
  },
};
</script>

<style></style>
