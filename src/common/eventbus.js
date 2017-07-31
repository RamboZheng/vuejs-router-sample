import Vue from 'vue';

var eventbusVue = new Vue();

module.exports = {

    on: function(eventname, cb) {
        eventbusVue.$off(eventname);
        eventbusVue.$on(eventname, cb);
    },

    emit: function(eventname, data) {
        eventbusVue.$emit(eventname, data);
    }

};