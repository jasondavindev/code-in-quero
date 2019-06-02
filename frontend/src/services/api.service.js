import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

const ApiService = {
	init() {
		Vue.use(VueAxios, axios);
		Vue.axios.defaults.baseURL = 'http://localhost:3000/api';
	},

	get(resource) {
		return Vue.axios.get(resource);
	},

	post(resource, params) {
		return Vue.axios.post(resource, params);
  },
  
  patch(resource, params) {
		return Vue.axios.patch(resource, params);
  },
  
  delete(resource, params) {
		return Vue.axios.delete(resource, params);
	},
};

export default ApiService;
