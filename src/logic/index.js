import '../css/index.css';
import $ from 'jquery';
import Vue from 'vue';
import log from '../common/log.js';
import VueRouter from 'vue-router';
import router from './router.js'

Vue.use(VueRouter);

/**
 * main
 */
$(function() {
    var obj = new IndexObj();
    obj.initVue();
});

/**
 * class define
 */
function IndexObj() {
}

/**
 * init vue
 */
IndexObj.prototype.initVue = function() {
    new Vue({
        router
    }).$mount("#J-app");
    router.push("/new");
};