<template>
    <AppHeader></AppHeader>
    <router-link to="/oauth2/callback/"></router-link>
    <router-view></router-view>
</template>

<script>
import AppHeader from "./components/AppHeader";

export default {
    name: "App",
    components: {
        AppHeader,
    },
};
</script>
