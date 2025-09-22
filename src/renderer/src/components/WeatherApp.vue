<template>
  <div class="weather-container p-6 bg-white rounded-xl shadow-lg">
    <!-- Search Section -->
    <div class="mb-6">
      <div class="flex gap-2">
        <input 
          v-model="cityInput" 
          @keyup.enter="searchWeather"
          type="text" 
          placeholder="Enter city name..."
          class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
        >
        <button 
          @click="searchWeather"
          class="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          :disabled="loading"
        >
          Search
        </button>
      </div>
      <div v-if="error" class="mt-2 p-3 bg-red-50 border border-red-200 rounded-lg">
        <p class="text-red-600 text-sm">{{ error }}</p>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="flex justify-center items-center py-8">
      <div class="animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent"></div>
    </div>

    <!-- Weather Display -->
    <div v-else-if="weatherData" class="text-center">
      <!-- Location -->
      <div class="mb-4">
        <h2 class="text-2xl font-bold text-gray-800">{{ weatherData.name }}</h2>
        <p class="text-gray-600">{{  weatherData.sys?.country }}</p>
      </div>

      <!-- Temperature and Icon -->
      <div class="flex justify-center items-center gap-4 mb-6">
        <img 
          :src="'https://openweathermap.org/img/wn/' + weatherData.weather[0].icon + '@2x.png'"
          :alt="weatherData.weather[0].description"
          class="w-20 h-20"
        >
        <div>
          <h3 class="text-4xl font-bold text-gray-800">{{ Math.round(weatherData.main.temp) }}°C</h3>
          <p class="text-lg text-gray-600 capitalize">{{ weatherData.weather[0].description }}</p>
        </div>
      </div>

      <!-- Additional Details -->
      <div class="grid grid-cols-2 gap-4">
        <div class="p-3 bg-purple-50 rounded-lg">
          <p class="text-sm text-gray-600">Feels Like</p>
          <p class="text-lg font-semibold text-gray-800">{{ Math.round(weatherData.main.feels_like) }}°C</p>
        </div>
        <div class="p-3 bg-purple-50 rounded-lg">
          <p class="text-sm text-gray-600">Humidity</p>
          <p class="text-lg font-semibold text-gray-800">{{ weatherData.main.humidity }}%</p>
        </div>
        <div class="p-3 bg-purple-50 rounded-lg">
          <p class="text-sm text-gray-600">Wind Speed</p>
          <p class="text-lg font-semibold text-gray-800">{{ Math.round(weatherData.wind.speed * 3.6) }} km/h</p>
        </div>
        <div class="p-3 bg-purple-50 rounded-lg">
          <p class="text-sm text-gray-600">Pressure</p>
          <p class="text-lg font-semibold text-gray-800">{{ weatherData.main.pressure }} hPa</p>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-8 text-gray-500">
      <p>Enter a city name to see the weather</p>
    </div>
  </div>
</template>

<script>
import { weatherService } from '../services/weatherService'

export default {
  name: 'WeatherApp',
  data() {
    return {
      cityInput: '',
      weatherData: null,
      loading: false,
      error: null
    }
  },
  methods: {
    async searchWeather() {
      if (!this.cityInput.trim()) {
        this.error = 'Please enter a city name'
        return
      }

      this.loading = true
      this.error = null

      try {
        this.weatherData = await weatherService.getWeatherByCity(this.cityInput)
      } catch (error) {
        this.error = error.message
        this.weatherData = null
      } finally {
        this.loading = false
      }
    }
  },
  mounted() {
  this.cityInput = 'London'
  this.searchWeather()
}

}
</script>

<style scoped>
.weather-container {
  min-width: 400px;
  max-width: 500px;
}
</style>