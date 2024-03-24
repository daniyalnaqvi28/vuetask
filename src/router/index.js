import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateUsers from '../views/products/CreateProducts.vue';
import EditProducts from '../views/products/EditProduct.vue';
import Callback from '../components/Callback.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/create',
      name: 'create',
      component: CreateUsers
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: EditProducts
    },
    {
      path: '/callback',
      name: 'callback',
      component: Callback
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/todo-list',
      name: 'todo',
      component: () => import('../views/todoList/index.vue')
    }, {
      path: '/todo-list/edit/:id',
      name: 'todoEdit',
      component: () => import('../views/todoList/edit.vue')
    }
  ]
})

export default router
