import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import store from "./store/index";
import AuthHandler from "./components/AuthHandler";

const routes = [
    // {
    //     path: "/",
    //     name: "home",
    //     component: App,
    // },
    {
        path: "/oauth2/callback/",
        name: "AuthHandler",
        component: AuthHandler,
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).use(store).use(router).mount("#app");
