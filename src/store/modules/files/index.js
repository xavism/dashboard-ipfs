import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  files: [],
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};