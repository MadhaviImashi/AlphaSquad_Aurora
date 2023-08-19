import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

{/* iconNavigationBar can be used to display: house, case, earth, rocket, profile */}
export default function IconNavigationBar({ source, onPress, name }) {

  let width; 
  let height;

  if (name === 'profile') {
    width = 20
  }
  const customStyles = {
    ...styles.icon,
      height: height || styles.icon.height,
      width: width || styles.icon.width,
  };

  return (
    <TouchableOpacity onPress={onPress} style={customStyles}>
      <Image source={source} style={styles.icon} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
