import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//vue-router
import * as VueRouter from 'vue-router'

//routes
import routes from './utils/routes.js'

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes

})

createApp(App)

.use(router)

.mount('#app')
