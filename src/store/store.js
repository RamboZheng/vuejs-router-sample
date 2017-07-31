import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

module.exports = new Vuex.Store({
    state: {
        count: 10
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
})