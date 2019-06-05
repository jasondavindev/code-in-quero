import { SET_ESCOLA, SET_PARCEIRO, SET_RESPOSTA } from './actions.type';
import Storage from '../services/storage.service';

const state = {
  idParceiro: undefined,
  idEscola: undefined,
  idResposta: undefined,
  cursos: []
};

const getters = {
  parceiro: () => state.idParceiro,
  escola: () => state.idEscola,
  cursos: () => state.cursos
};

const actions = {
  [SET_PARCEIRO]: (context, id) => {
    state.idParceiro = id;
    Storage.save('parceiro', id);
  },
  [SET_ESCOLA]: (context, id) => {
    state.idEscola = id;
    Storage.save('escola', id);
  },
  [SET_RESPOSTA]: (context, id) => {
    state.idResposta = id;
    Storage.save('resposta', id);
  },
  addCurso(context, curso) {
    state.cursos.push(curso);
  }
};

const mutations = {};

export default {
  getters,
  actions,
  state,
  mutations
};
