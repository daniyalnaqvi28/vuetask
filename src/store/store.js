import { createApp } from 'vue';
import { createStore } from 'vuex';

export const store = createStore({
  state: {
    test: "test",
    users: [
      {
        name: "Ali",
        age: 20,
        status: "Active",
      },
      {
        name: "Usman",
        age: 30,
        status: "InActive",
      },
      {
        name: "Haider",
        age: 25,
        status: "Active",
      },
      {
        name: "Usman",
        age: 48,
        status: "Inprogress",
      },
    ],
  },
  getters: {
    userModification:state=>{
      var userModification= state.users.map(user=>{
        return {
          name: '***'+user.name+'***',
          age: user.age*1000
        }

      });

      return userModification;
    }
  }
});