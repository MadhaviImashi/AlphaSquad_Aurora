import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default ButtonBookNow = ({ onPress,ButtonName }) => {
  return (
    <View>
      <TouchableOpacity
        // style={styles.button}
        onPress={onPress}
      >
        <LinearGradient
          colors={["#150099", "#98C1FF"]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>{ButtonName}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    // backgroundColor:
    //   linear - gradient("92.44deg, #FFA803 -164.05%, #FFD12E 98.37%"),
    padding: 15,
    width: 340,
    margin: 15,
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 0,
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 15,
  },
});
