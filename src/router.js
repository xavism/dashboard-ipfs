import Vue from 'vue'
import Router from 'vue-router'
import NodeView from './views/NodeView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'node',
      component: NodeView
    },
    {
      path: '/logs',
      name: 'logs',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/LogsView.vue')
    }
  ]
})
