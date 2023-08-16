import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

export default function BackgroundImage({ source, children }) {
  return (
    <ImageBackground source={source} style={styles.background}>
      <View style={styles.content}>{children}</View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover", // or "contain" depending on your preference
    width: "100%", // Make the width 100% of the screen
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },
});