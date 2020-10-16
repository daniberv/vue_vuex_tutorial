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
}