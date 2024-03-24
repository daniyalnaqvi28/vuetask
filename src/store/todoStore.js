import { createApp } from 'vue';
import { createStore } from 'vuex';

export const todoStore = createStore({
  state: {
    test: "teswweweet",
    todoList: [
     
    ],
  },
  getters: {
    todo: (state) => state.todoList,
  },
  actions: {
    updateTodo({ commit }, updatedTodo) {
      commit('setTodo', updatedTodo);
    },
    addTodo({commit},newTodo){
      commit('addNewTodo',newTodo);
    },
    deleteTodo({commit}, id){
      commit('deletedTodo',id);
    }
  },
  mutations: {
    addNewTodo(state, newTodo) {
      state.todoList.push(newTodo);
    },
    setTodo(state, updatedTodo) {
      const index = state.todoList.findIndex(todo => todo.id === updatedTodo.id);
      if (index !== -1) {
         state.todoList.splice(index, 1, updatedTodo);
      } else {
         console.error('Todo not found!');
      }
    },
    deletedTodo(state, id){
      alert("are you sure to delete");
      state.todoList.splice(id,1);
    }
  },

});
