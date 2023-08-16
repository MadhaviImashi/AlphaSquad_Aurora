import React from "react";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
export default function TextHeading1({ value, fontSize }) {
  
    const textStyles = {
    ...styles.Heading1,
    fontSize: fontSize || styles.Heading1.fontSize, // Use prop value or default
  };

  return <Text style={textStyles}>{value}</Text>;
}

const styles = StyleSheet.create({
  Heading1: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "left",
  },
});
