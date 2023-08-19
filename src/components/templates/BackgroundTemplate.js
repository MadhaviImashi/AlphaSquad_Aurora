import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

export default function BackgroundTemplate({ source, children,justifyContent ,alignItems,paddingTop}) {
  const customContentStyles = {
      ...styles.content,
      justifyContent: justifyContent || styles.content.justifyContent, 
      alignItems: alignItems || styles.content.alignItems, 
      paddingTop: paddingTop || styles.content.paddingTop, 
     
  };
  return (
    <View style={styles.container}>
        <ImageBackground source={require("../../assets/images/background.png")} style={styles.background}>
          <View style={customContentStyles}>{children}</View>
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
    resizeMode: "cover", 
    width: "100%", 
  },
  content: {
    paddingTop:0,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});