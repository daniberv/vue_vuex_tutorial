import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './routes'

Vue.config.productionTip = false

if(store.state.user.token) store.dispatch('login', store.state.user.token)
else store.dispatch('setUserStatus', false)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
