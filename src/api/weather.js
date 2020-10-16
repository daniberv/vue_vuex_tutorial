import axios from "axios"

export default {
    getWeather(lat, long, locale, key) {
        return new Promise((resolve, reject) => {
            axios.get(`${process.env.VUE_APP_OPEN_WEATHER_BASE_URL}onecall?lang=${locale}&lat=${lat}&lon=${long}&exclude={part}&lang=${locale}&appid=${key}`)
                .then(response => {
                    resolve(response)
                })
                .catch(e => {
                    reject(e)
                })
        })
    }
}