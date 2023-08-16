import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import IconBackwardArrow from "../icons/IconBackwardArrow";

export default function RoundIconButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <IconBackwardArrow />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
});
