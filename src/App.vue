<template>
    <AppHeader></AppHeader>
    <div class="ui container">
        <router-link to="/oauth2/callback/"></router-link>
        <router-view></router-view>
    </div>
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
