import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import store from "./store/index";
import AuthHandler from "./components/AuthHandler";
import ImageList from "./components/ImageList";
import UploadForm from "./components/UploadForm";

const routes = [
    {
        path: "/",
        component: ImageList,
    },
    {
        path: "/upload",
        component: UploadForm,
    },
    {
        path: "/oauth2/callback/",
        component: AuthHandler,
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).use(store).use(router).mount("#app");
