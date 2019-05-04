import Vue from 'vue'
import Vuex from 'vuex'
import node from './modules/node'
import files from './modules/files'
//import logs from './modules/logs'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    node,
    files,
    //logs
    },
  strict: process.env.NODE_ENV !== 'production'
})
