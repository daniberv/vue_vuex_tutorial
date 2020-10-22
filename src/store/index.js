import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import plugins from './plugins'

export const STORAGE_VALUE = `${process.env.VUE_APP_STORAGE_PREFIX}_settings`
export const TOKEN_VALUE = `${process.env.VUE_APP_STORAGE_PREFIX}_token`

Vue.use(Vuex)

const state = {
  settings: JSON.parse(window.localStorage.getItem(STORAGE_VALUE) || `{
    "lang":"ru",
    "city":"Витебск",
    "coordinates":{
      "lat": "55",
      "long": "30"
    }   
  }`),
  user: {
    token: window.localStorage.getItem(TOKEN_VALUE) || null,
    loggedIn: false,
    loading: true
  }
}

const getters = {
  auth: state => {
    return state.user
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins
})