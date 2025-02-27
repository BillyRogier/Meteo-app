import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const WeatherItem = ({ item, index }) => {
  return (
    <View key={index} style={styles.forecastItem}>
      <Image
        source={{
          uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
        }}
        style={styles.forecastIcon}
      />
      <Text style={styles.forecastTemp}>{Math.round(item.main.temp)}°C</Text>
      <Text style={styles.forecastTime}>
        {new Date(item.dt * 1000).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </Text>
      <Text style={styles.forecastDate}>
        {new Date(item.dt * 1000).toLocaleDateString([], {
          day: "numeric",
          month: "short",
        })}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  forecastTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#0A3B59",
  },
  forecastItem: {
    marginRight: 15,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    minWidth: 80,
  },
  forecastIcon: {
    width: 50,
    height: 50,
  },
  forecastTemp: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#0A3B59",
  },
  forecastTime: {
    fontSize: 12,
    marginTop: 2,
    color: "#0A3B59",
  },
  forecastDate: {
    fontSize: 12,
    marginTop: 2,
    color: "#0A3B59",
  },
});

export default WeatherItem;
