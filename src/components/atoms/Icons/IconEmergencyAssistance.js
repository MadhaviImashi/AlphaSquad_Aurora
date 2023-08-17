import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

export default function IconEmergencyAssistance({ source, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={source} style={styles.icon} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  icon: {
    width: 73,
    height: 73,
  },
});
