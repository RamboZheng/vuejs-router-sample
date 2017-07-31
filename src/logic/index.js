import '../css/index.css';
import $ from 'jquery';
import Vue from 'vue';
import log from '../common/log.js';
import router from '../router/router.js'
import store from '../store/store.js'

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
    log.d("count="+store.state.count);
}

/**
 * init vue
 */
IndexObj.prototype.initVue = function() {
    new Vue({
        router, store
    }).$mount("#J-app");
    router.push("/new");
};