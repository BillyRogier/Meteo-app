import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const WeatherHeader = ({ weatherData }) => {
  return (
    <View style={styles.currentWeather}>
      <Text style={styles.temperature}>{weatherData.main.temp}°C</Text>
      <Image
        source={{
          uri: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,
        }}
        style={styles.icon}
      />
      <View style={styles.weatherInfo}>
        <Text style={styles.cityName}>{weatherData.name}</Text>
        <Text style={styles.description}>
          {weatherData.weather[0].description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  currentWeather: {
    flexDirection: "column",
    marginBottom: 20,
    alignItems: "center",
  },
  icon: {
    width: 200,
    height: 200,
  },
  weatherInfo: {
    marginLeft: 10,
    marginBottom: 50,
    alignItems: "center",
  },
  cityName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0A3B59",
  },
  temperature: {
    fontSize: 60,
    fontWeight: "bold",
    marginVertical: 5,
    color: "#0A3B59",
  },
  description: {
    fontSize: 16,
    textTransform: "capitalize",
    color: "#0A3B59",
  },
});

export default WeatherHeader;
