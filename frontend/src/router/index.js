import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('../components/Splash.vue'),
		},
		{
			path: '/escola',
			name: 'escola',
			component: () => import('../components/Escola'),
		},
		{
			path: '/turmas',
			name: 'turmas',
			component: () => import('../components/Tela3.vue'),
		},
		{
			path: '/parceiro',
			name: 'parceiro',
			component: () => import('../components/Parceiro.vue'),
		},
	],
});
