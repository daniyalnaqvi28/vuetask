// import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import '@/assets/todoList.css'
// import {store} from './store/store';
// import {productStore} from './store/ProductStore';
// import {createPinia} from 'pinia'
import { createAuth0 } from '@auth0/auth0-vue';
import {todoStore} from './store/todoStore';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import axios from 'axios'

const app = createApp(App)
// app.use(Toast,options)
app.use(router)
// app.use(axios)
app.use(Toast)
app.use(todoStore)
// app.use(productStore)
// app.use(createPinia())

// app.use(
//     createAuth0({
//       domain: "dev-b5eyfhvygbv5svjb.us.auth0.com",
//       clientId: "93XdvgYjVUfmU1hGhjRImRi4pj5nIt1b",
//       authorizationParams: {
//         redirect_uri: 'http://localhost:5173',
//       }
//     })
//   );   

// const domainID='dev-b5eyfhvygbv5svjb.us.auth0.com';
// const clientID='93XdvgYjVUfmU1hGhjRImRi4pj5nIt1b';
// app.use(createAuth0({
//         domain: domainID,
//         clientId: clientID,
//         authorizationParams:{
//             redirect_uri: 'http://localhost:5173/callback',
//         },



// }

// ))

app.mount('#app')
 