import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

{/* iconNavigationBar can be used to display: house, case, earth, rocket, profile */}
export default function IconNavigationBar({ source, onPress }) {
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
    width: 25,
    height: 25,
  },
});
