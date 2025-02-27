import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import WeatherItem from "./WeatherItem";

const WeatherForecast = ({ forecastWeatherData }) => {
  return (
    <View>
      <Text style={styles.forecastTitle}>Prévisions sur 5 jours</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        {forecastWeatherData.map((item, index) => (
          <WeatherItem item={item} index={index} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  forecastTitle: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#0A3B59",
  },
  scrollView: {
    marginBottom: 15,
  },
});

export default WeatherForecast;
