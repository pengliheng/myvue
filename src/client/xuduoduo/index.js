import 'lib-flexible';
import Vue from 'vue';
import App from './App.vue';
import router from './router';


(() => new Vue({
  el: '#app',
  router,
  data: {
    message: 'Hello id',
  },
  components: { App },
  template: '<App/>',
}))();

