import router from '@/routes'
import api from '@/api/auth'

export default {
    setSettings({ commit }, settings) {
        commit('setSettings', settings)
    },
    setCity({ commit }, settings) {
        commit('setCity', settings)
    },
    setSettingsLanguage({ commit }, settings) {
        commit('setSettingsLanguage', settings)
    },
    setSettingsCoordinates({ commit }, settings) {
        commit('setSettingsCoordinates', settings)
    },

    login({ commit }) {
        api.loginUser()
            .then(response => {
                commit('login', response)
                router.push('/webapp')
            })
    },
    setUserStatus({ commit }) {
        commit('setUserStatus', false)
    }
}