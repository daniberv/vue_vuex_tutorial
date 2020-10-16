import axios from "axios"

export default {
    getLocation(lat, long, locale) {
        return new Promise((resolve, reject) => {
            axios.get(`${process.env.VUE_APP_BIG_DATA_BASE_URL}?latitude=${lat}&longitude=${long}&localityLanguage=${locale}`)
                .then(response => {
                    resolve(response)
                })
                .catch(e => {
                    reject(e)
                })
        })
    }
}