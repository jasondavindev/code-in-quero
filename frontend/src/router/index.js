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
			path: '/escola-pre',
			name: 'escola-pre',
			component: () => import('../components/EscolaPre'),
		},
		{
			path: '/escola',
			name: 'escola',
			component: () => import('../components/Escola'),
		},
		{
			path: '/inicio',
			name: 'inicio',
			component: () => import('../components/Inicio.vue'),
		},
		{
			path: '/turmas',
			name: 'turmas',
			component: () => import('../components/Turma.vue'),
		},
		{
			path: '/parceiro-pre',
			name: 'parceiro-pre',
			component: () => import('../components/ParceiroPre.vue'),
		},
		{
			path: '/parceiro',
			name: 'parceiro',
			component: () => import('../components/Parceiro.vue'),
		},
		{
			path: '/turmas',
			name: 'turma',
			component: () => import('../components/Turma.vue'),
		},
		{
			path: '/turmas-pos-1',
			name: 'turma-pos-1',
			component: () => import('../components/TurmaPosPrimeiro.vue'),
		},
		{
			path: '/turmas-pos-2',
			name: 'turma-pos-2',
			component: () => import('../components/TurmaPosOutros.vue'),
		},
		{
			path: '/turmas-finaliza',
			name: 'turma-finaliza',
			component: () => import('../components/TurmaFinaliza.vue'),
		},
		{
			path: '/preview-unico',
			name: 'preview-unico',
			component: () => import('../components/PreviewOfertaAdicionada.vue'),
		},
		{
			path: '/preview-geral',
			name: 'preview-geral',
			component: () => import('../components/PreviewTodasOfertas.vue'),
		},
		{
			path: '/turmas-pre',
			name: 'turma-pre',
			component: () => import('../components/TurmaPre.vue'),
		},
		{
			path: '/detalhes-parceria',
			name: 'detalhes-parceria',
			component: () => import('../components/DetalhesParceria.vue'),
		},
	],
});
