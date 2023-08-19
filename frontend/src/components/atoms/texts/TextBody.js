import React from "react";
import { Text } from "react-native";
import { StyleSheet } from "react-native";

export default function TextBody({ value, fontSize, lineHeight, fontWeight, textAlign, marginBottom, color, right}) {
  
  const customStyles = {
    ...styles.TextSmall,
      fontSize: fontSize || styles.TextSmall.fontSize, // Use prop value or default
      lineHeight: lineHeight || styles.TextSmall.lineHeight,
      fontWeight: fontWeight || styles.TextSmall.fontWeight,
      textAlign: textAlign || styles.TextSmall.textAlign, 
      marginBottom: marginBottom || styles.TextSmall.marginBottom,
      marginRight: right || styles.TextSmall.marginRight,
      color: color || styles.TextSmall.color,
  };

  return <Text style={customStyles}>{value}</Text>;
}

const styles = StyleSheet.create({
  TextSmall: {
    fontSize: 10,
    color: 'white',
    lineHeight: 20,
    fontWeight: 400,
    fontStyle: 'normal',
    textAlign: "left",
    marginBottom: 0,
    marginRight: 0,
  },
});
