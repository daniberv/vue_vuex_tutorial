import Vue from 'vue'
import VueRouter from 'vue-router'
import { routeslist } from './routes'

Vue.use(VueRouter)

export default new VueRouter({
  routes: routeslist,
  mode: 'history'
})