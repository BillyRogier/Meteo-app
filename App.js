import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Loader from "./components/Loader";
import WeatherForecast from "./components/WeatherForecast";
import WeatherHeader from "./components/WeatherHeader";
import { useLocation } from "./hooks/useLocation";
import { useWeatherData } from "./hooks/useWeatherData";

export default function App() {
  const { location, errorMsg: locationError } = useLocation();
  const {
    weatherData,
    forecastWeatherData,
    errorMsg: weatherError,
  } = useWeatherData(location?.coords.latitude, location?.coords.longitude);

  const errorMsg = locationError || weatherError;

  return (
    <View style={styles.container}>
      {weatherData && forecastWeatherData ? (
        <View style={styles.weatherContainer}>
          <WeatherHeader weatherData={weatherData} />
          <WeatherForecast forecastWeatherData={forecastWeatherData} />
        </View>
      ) : (
        <Loader />
      )}
      {errorMsg ? <Text style={styles.error}>{errorMsg}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 50,
    backgroundColor: "#F2E4D8",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignContent: "center",
  },
  weatherContainer: {
    width: "100%",
  },
  error: {
    color: "red",
    textAlign: "center",
    margin: 10,
  },
});
