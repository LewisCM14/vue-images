import { createApp } from "vue";
import { createRouter, createWebHistory } from 'vue-router'
import App from "./App.vue";
import store from "./store/index";
import AuthHandler from './components/AuthHandler'

const routes = [
    {
        path: '/',
        name: 'home',
        component: App
    },
    {
        path: '/oauth2/callback',
        name: 'auth',
        component: AuthHandler,
    }
]

const router = createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes
})

createApp(App).use(store, router).mount('#app');