import { SET_ESCOLA, SET_PARCEIRO } from './actions.type';

const state = {
	idParceiro: undefined,
	idEscola: undefined,
	cursos: [],
};

const getters = {
	parceiro: () => state.idParceiro,
	escola: () => state.idEscola,
	cursos: () => state.cursos,
};

const actions = {
	[SET_PARCEIRO]: (context, id) => (state.idParceiro = id),
	[SET_ESCOLA]: (context, id) => (state.idEscola = id),
	addCurso(context, curso) {
		state.cursos.push(curso);
	},
};

const mutations = {};

export default {
	getters,
	actions,
	state,
	mutations,
};
