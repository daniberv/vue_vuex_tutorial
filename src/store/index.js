import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import plugins from './plugins'

export const STORAGE_VALUE = `${process.env.VUE_APP_STORAGE_PREFIX}_settings`

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    settings: JSON.parse(window.localStorage.getItem(STORAGE_VALUE) || `{
      "lang":"ru",
      "city":"Витебск",
      "coordinates":{
        "lat": "55",
        "long": "30"
      }   
    }`)
  },
  actions,
  mutations,
  plugins
})