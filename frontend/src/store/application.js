import { SET_ESCOLA, SET_PARCEIRO } from './actions.type';

const state = {
	idParceiro: undefined,
	idEscola: undefined,
};

const getters = {
	parceiro: () => state.idParceiro,
	escola: () => state.idEscola,
};

const actions = {
	[SET_PARCEIRO]: (context, id) => (state.idParceiro = id),
	[SET_ESCOLA]: (context, id) => (state.idEscola = id),
};

const mutations = {};

export default {
	getters,
	actions,
	state,
	mutations,
};
