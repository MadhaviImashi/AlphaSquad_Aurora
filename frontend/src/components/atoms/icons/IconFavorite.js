import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Octicons } from "@expo/vector-icons";

export default function IconFavorite({ onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Octicons name="heart-fill" size={26} color="gray" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 69,
    height: 69,
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
});
