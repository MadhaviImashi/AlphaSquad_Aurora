import React from "react";
import { Image, StyleSheet } from "react-native";

{/* iconProfileData can be used to display: achievement, payment, privacy */}
export default function IconProfileData({ source, onPress }) {
  return (
      <Image source={source} style={styles.icon} />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  icon: {
    width: 60,
    height: 60,
  },
});