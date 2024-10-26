import axios from "axios";

const key = import.meta.env.VITE_KEY_API;

//для поиска по названию
async function getWeatherData(location) {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=metric&lang=ru`
    );

    return response.data;
  } catch (error) {
    console.log(`ошибка слудующая:`, error);
    return null;
  }
}

//для дефолтного отображения по координатам
async function getWeatherByCoords(lat, lon) {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric&lang=ru`
    );

    return response.data;
  } catch (error) {
    console.log("Ошибка следующая:", error);
    return null;
  }
}

export { getWeatherData, getWeatherByCoords };
