import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";
import TextHeading from "../../atoms/texts/TextHeading";
import TextBody from "../../atoms/texts/TextBody";

export default function CardBookingDate({ cardImage, state, location}) {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <>
      <TouchableOpacity onPress={toggleDropdown}>
        <ImageBackground source={cardImage} style={styles.background}>
          <View style={styles.content}>
            <TextHeading
              value={`${state}`}
              fontSize={14}
              lineHeight={20}
              fontWeight={400}
            />
          </View>
          <View style={styles.content}>
            <TextBody
              value={`${location}`}
              fontSize={20}
              fontWeight={600}
            ></TextBody>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    borderRadius: 10,
    width: 400,
    height: 100,
    padding: 20,
    right: 30,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 16,
    left: 80,
    top: 8,
  },
  dropdownContent: {
    backgroundColor: "white",
    padding: 10,
    position: "absolute",
    top: 110,
    left: 30,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});
