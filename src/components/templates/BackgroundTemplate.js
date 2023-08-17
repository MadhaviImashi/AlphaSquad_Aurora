import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

export default function BackgroundTemplate({ source, children }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={source} style={styles.background}>
        <View style={styles.content}>{children}</View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
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