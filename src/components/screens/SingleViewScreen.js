import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

export default function SingleViewScreen({ route }) {
  const { title, popularity, releaseDate, description, posterUrl } = route.params;

  const screenHeight = Dimensions.get("window").height;
  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Poster */}
      <Image source={{ uri: posterUrl }} style={[styles.poster, { height: screenHeight * 0.3 }]} resizeMode="contain" />

      {/* Description */}
      <Text style={styles.description}>{description}</Text>

      {/* Popularity and Release Date */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Popularity: {popularity}</Text>
        <Text style={styles.infoText}>Release Date: {releaseDate}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  poster: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    padding: 0,
    textAlign: "justify",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 5,
  },
  infoText: {
    fontSize: 14,
  },
});
