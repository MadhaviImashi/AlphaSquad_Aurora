import React from "react";
import { Image, StyleSheet } from "react-native";

export default function IconPlanet({ source }) {
  return (
      <Image source={source} style={styles.icon} />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  icon: {
    width: 27,
    height: 19,
    flexShrink:0
  },
});