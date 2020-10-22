import Vue from 'vue'
import VueRouter from 'vue-router'
import { routeslist } from './routes'
import store from '@/store'
import middlewarePipeline from '@/routes/middlewarePipeline'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: routeslist,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
      return next()
  }
  
  const middleware = to.meta.middleware
  const context = {
      to,
      from,
      next,
      store
  }
  return middleware[0]({
      ...context,
      next: middlewarePipeline(context, middleware, 1)
  })
})
export default router