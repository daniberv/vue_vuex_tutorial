<template>
  <div class="container mb-5 pb-5">
      <h1 class="h1 mt-5 mb-3">Weather</h1>
      <div class="alert alert-secondary">
          <div class="display-4">{{ city }}</div>
          <button class="btn btn-primary shadow mt-3" @click="getLocation">Определить местоположение</button>
      </div>

      

      <div v-if="current_weather">
          <div class="card shadow">
              <div class="card-body">
                  <h2>Погода сейчас</h2>
                    <ul>
                        <li>Температура: {{ current_weather.temp | calvinToCelc }}<sup>o</sup> | Ощущается: {{ current_weather.feels_like | calvinToCelc }}<sup>o</sup></li>
                        <li>Влажность: {{ current_weather.humidity }}%</li>
                        <li>Давление: {{ current_weather.pressure | pascalToMercury }} мм.рт.ст.</li>
                        <li>Погода: {{ current_weather.weather[0].description }}</li>
                    </ul>

                    <img class="weather__icon" :src="`http://openweathermap.org/img/wn/${current_weather.weather[0].icon}@2x.png`">
              </div>
          </div>

            <div class="mt-3">
                <h2>Погода на 7 дней</h2>
                <div class="row">
                    <div v-for="(fore, index) in daily_forecast" :key="`forecast_${index}`" class="col-sm-4 mb-3">
                        <div class="card shadow-sm">
                            <div class="card-body">
                                <ul>
                                    <li>
                                        <small>
                                            <div>Утром: {{ fore.temp.day | calvinToCelc }}<sup>o</sup></div>
                                            <div>Днем: {{ fore.temp.eve | calvinToCelc }}<sup>o</sup></div>
                                            <div>Ночью: {{ fore.temp.night | calvinToCelc }}<sup>o</sup></div>
                                        </small>
                                    </li>
                                    <li>Влажность: {{ fore.humidity }}%</li>
                                    <li>Давление: {{ fore.pressure | pascalToMercury }} мм.рт.ст.</li>
                                    <li>Погода: {{ fore.weather[0].description }}</li>
                                </ul>
                                <img class="weather__icon" :src="`http://openweathermap.org/img/wn/${fore.weather[0].icon}@2x.png`">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
      <div v-else>
          loading
      </div>
  </div>
</template>

<script>
import api from '@/api/weather'

export default {
    data() {
        return {
            current_weather: null,
            daily_forecast: []
        }
    },
    filters: {
        calvinToCelc(value) {
            return (value - 273).toFixed(0)
        },
        pascalToMercury(value) {
            return (value * 0.75006375541921).toFixed(0)
        }
    },
    created() {
        this.getWeather()
    },
    computed: {
        city: function () {
            return this.$store.state.settings.city
        },
    },
    watch: {
        city() {
            this.getWeather()
        }
    },
    methods: {
        getWeather() {
            api.getWeather(
                this.$store.state.settings.coordinates.lat,
                this.$store.state.settings.coordinates.long,
                this.$store.state.settings.lang,
                process.env.VUE_APP_OPEN_WEATHER_API
            )
            .then(response => {
                if(response.status == 200) {
                    this.current_weather = response.data.current
                    this.daily_forecast = response.data.daily
                    console.log(response)
                } else {
                    alert('Network error occured!')
                }
            })
            .catch(e => {
                console.log(e)
            })
        },
        getLocation() {
            this.$root.$confirm('Изменить', 'Вы действительно хотите изменить локацию?').then(confirm => {
                if(confirm) {
                    navigator.geolocation.getCurrentPosition(
                        position => {
                            const newCoords = {
                                lat: position.coords.latitude,
                                long: position.coords.longitude
                            }
                            this.$store.dispatch('setSettingsCoordinates', newCoords)
                        },
                        error => {
                            console.log(error.message);
                        },
                    )  
                }
            })
        }
    }
}
</script>

<style>

</style>