import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import WeatherItem from "./WeatherItem";

const WeatherForecast = ({ forecastWeatherData }) => {
  return (
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        {forecastWeatherData.map((item, index) => (
          <WeatherItem item={item} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginBottom: 15,
  },
});

export default WeatherForecast;
