import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  node: {
      id: 'Qmcpo2iLBikrdf1d6QU6vXuNb6P7hwrbNPW9kLAH8eG67z',
      address: '/ip4/104.131.131.82/tcp/4001/ipfs',
      country: 'es',
      online: true
  }
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};