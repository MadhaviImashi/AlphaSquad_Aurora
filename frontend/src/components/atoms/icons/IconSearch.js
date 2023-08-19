import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function IconSearch({ onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Ionicons name="search" size={20} color="black"/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
  },
});
