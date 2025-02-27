import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const Loader = () => {
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size="large" color="#0A3B59" />
      <Text style={styles.loaderText}>Chargement...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    height: "100%",
  },
  loaderText: {
    marginTop: 10,
    fontSize: 16,
    color: "#0A3B59",
  },
});

export default Loader;
