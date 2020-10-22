export default {
    setSettings(state, settings) {
        state.settings = settings
    },
    setCity(state, city) {
        state.settings.city = city
    },
    setSettingsLanguage(state, lang) {
        state.settings.lang = lang
    },
    setSettingsCoordinates(state, {lat, long}) {
        state.settings.coordinates.lat = lat
        state.settings.coordinates.long = long
    },

    login(state, token) {
        state.user.loggedIn = true
        state.user.token = token
    },
    setUserStatus(state, status) {
        state.user.loading = !!status
    }
}