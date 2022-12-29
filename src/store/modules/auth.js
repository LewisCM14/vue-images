import api from "../../api/imgur";
import qs from "qs";
import { router } from "../../main";

const state = {
    // allows login status to persist via local storage, evaluates to null if none stored
    token: window.localStorage.getItem("imgur_token"),
};

const getters = {
    isLoggedIn: (state) => !!state.token,
};

const actions = {
    login: () => {
        api.login();
    },
    finalizeLogin({ commit }, hash) {
        // collects the key defined after the hash in the url upon login via imgur api
        const query = qs.parse(hash.replace("#", ""));
        // updates the token to the collected key & stores for login persistence
        commit("setToken", query.access_token);
        window.localStorage.setItem("imgur_token", query.access_token);
        // navigate to home page without app reload
        router.push("/");
    },
    logout: ({ commit }) => {
        commit("setToken", null);
        window.localStorage.removeItem("imgur_token");
    },
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
