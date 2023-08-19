import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function IconBackwardArrow({ onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Ionicons name="chevron-back" size={20} color="black" backgroundColor="white"/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 33,
    height: 33,
    borderRadius: 24,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
});
