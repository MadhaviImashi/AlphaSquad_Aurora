import React from "react";
import { Text } from "react-native";
import { StyleSheet } from "react-native";

export default function TextHeading({ value, fontSize, lineHeight, fontWeight, textAlign, marginBottom}) {
  
  const customStyles = {
    ...styles.Heading,
    fontSize: fontSize || styles.Heading.fontSize, // Use prop value or default
    lineHeight: lineHeight || styles.Heading.lineHeight,
    fontWeight: fontWeight || styles.Heading.fontWeight,
    textAlign: textAlign || styles.Heading.textAlign, 
    marginBottom: marginBottom || styles.Heading.marginBottom
  };

  return <Text style={customStyles}>{value}</Text>;
}

const styles = StyleSheet.create({
  Heading: {
    fontSize: 36,
    color: 'white',
    lineHeight: 39,
    fontStyle: "normal",
    fontWeight: 700,
    textAlign: "left",
    marginBottom: 0,
  },
});
