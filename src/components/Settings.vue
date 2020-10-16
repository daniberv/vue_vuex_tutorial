<template>
  <div class="container">
      <h1 class="h1 mt-5 mb-3">Settings</h1>

      <div class="row">
          <div class="col-sm-2">
            <div class="form-group">
                <select v-model="settingsLang" class="form-control">
                    <option value="en">En</option>
                    <option value="ru">Ru</option>
                </select>
            </div>
          </div>
          <div class="col-sm-3">
              <div class="form-group">
                <input type="text" v-model="settingsLat" class="form-control">
            </div>
          </div>
          <div class="col-sm-3">
            <div class="form-group">
                <input type="text" v-model="settingsLong" class="form-control">
            </div>
        </div>
      </div>
      
      <div class="alert alert-secondary">
          {{ city }}
      </div>

      <div class="card shadow">
          <div id="mapid"></div>
      </div>
  </div>
</template>

<script>
import L from 'leaflet'

export default {
    mounted() {
        const map = L.map('mapid').setView([this.settingsLat, this.settingsLong], 13);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
        }).addTo(map);

        map.on('click', this.onMapClick);
    },
    computed: {
        city: function () {
            return this.$store.state.settings.city
        },
        settingsLang: {
            get() {
                return this.$store.state.settings.lang
            },
            set(newLanguage) {
                this.$store.dispatch('setSettingsLanguage', newLanguage)
            }
        },
        settingsLat: {
            get() {
                return this.$store.state.settings.coordinates.lat
            },
            set(newLat) {
                this.$store.dispatch('setSettingsLanguage', newLat)
            }
        },
        settingsLong: {
            get() {
                return this.$store.state.settings.coordinates.long
            },
            set(newLong) {
                this.$store.dispatch('setSettingsLanguage', newLong)
            }
        }
    },
    methods: {
        onMapClick(e) {
            this.$store.dispatch('setSettingsCoordinates', {
                lat: e.latlng.lat,
                long: e.latlng.lng
            })
        }
    }
}
</script>

<style>
    #mapid { height: 380px; }
</style>