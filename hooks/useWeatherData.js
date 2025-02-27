import { useEffect, useState } from "react";

export const useWeatherData = (latitude, longitude) => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastWeatherData, setForecastWeatherData] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    if (latitude && longitude) {
      const fetchWeatherData = async () => {
        try {
          const weatherResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.API_KEY}&units=metric`
          );
          const weatherData = await weatherResponse.json();
          setWeatherData(weatherData);

          const forecastWeatherResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.API_KEY}`
          );
          const forecastWeatherData = await forecastWeatherResponse.json();
          setForecastWeatherData(forecastWeatherData.list);
        } catch (error) {
          setErrorMsg(error.message);
        }
      };

      fetchWeatherData();
    }
  }, [latitude, longitude]);

  return { weatherData, forecastWeatherData, errorMsg };
};
