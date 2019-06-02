import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ApiService from './services/api.service';
import store from './store';

Vue.config.productionTip = false;

ApiService.init();

new Vue({
	render: h => h(App),
  router,
  store,
}).$mount('#app');
