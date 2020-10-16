import { STORAGE_VALUE } from './index'
import location from '@/api/location'

const localStoragePlugin = store => {
    store.subscribe((mutation, { settings }) => {
        location.getLocation(settings.coordinates.lat, settings.coordinates.long, settings.lang)
            .then(response => {
                settings.city = `${response.data.localityInfo.administrative[response.data.localityInfo.administrative.length - 1].name} ${response.data.localityInfo.administrative[response.data.localityInfo.administrative.length - 1].description}`
                window.localStorage.setItem(STORAGE_VALUE, JSON.stringify(settings))
            })
            .catch(e => {
                console.log(e)
            })
    })
}

export default [localStoragePlugin]