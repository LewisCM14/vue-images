import api from "../../api/imgur";
import qs from 'qs';

const state = {
    token: null,
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
        const query = qs.parse(hash.replace('#', ''));
        // updates the token to the collected key
        commit('setToken', query.access_token)
    },
    logout: ({ commit }) => {
        commit("setToken", null);
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
