import React from "react";
import { Image, StyleSheet } from "react-native";

{/* icon planet can be used to display: rating.png, temperature.png, cloud.png */}
export default function IconPlanet({ source, height, width }) {

  const customStyles = {
    ...styles.icon,
      height: height || styles.icon.height,
      width: width || styles.icon.width,
  };

  return (
      <Image source={source} style={customStyles} />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  icon: {
    width: 20,
    height: 20,
    flexShrink:0
  },
});