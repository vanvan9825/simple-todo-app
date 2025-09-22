import axios from 'axios';

const API_KEY = '8042893c7e9aa4fdf2e28715b28436e7';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';
export const weatherService = {
  async getWeatherByCity(city) {
    try {
      const response = await axios.get(`${BASE_URL}/weather`, {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric' // Use Celsius
        }
      });
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        throw new Error('City not found. Please try another city name.');
      }
      console.error('API Error:', error);
      throw new Error(`Failed to fetch weather data: ${error.message || 'Unknown error'}`);
    }
  }
};