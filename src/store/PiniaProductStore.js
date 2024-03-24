import { defineStore } from "pinia";

export const piniaProductStore=defineStore('productStore',{
    state:()=>({
        tasks:[
            {id: 1, title: "buy some milk", isFav: false},
            {id: 2, title: "buy some chocolates", isFav: true},
            {id: 3, title: "buy some candies", isFav: true},
        ],
        name: "Daniyal"
    }),
    getters:{
        favs(){
            return this.tasks.filter(task=>task.isFav);
        }
    }
})