import Vue from 'nativescript-vue';
import App from "./components/App.vue";

new Vue({
  render: function (h) {
    return h('Frame', [h(App)]);
  }
}).$start();
