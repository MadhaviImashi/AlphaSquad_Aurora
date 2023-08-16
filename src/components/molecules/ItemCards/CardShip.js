import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default CardShip = () => {
  return (
    <View>
      <ImageBackground
        source={require("./../../../assets/images/TransparaentCard/TransparentCard.png")}
        style={styles.card}
      >
        {/* Card Content */}
        <View style={styles.cardContent}>
          <Text style={styles.title}>Card Title</Text>
          <Text style={styles.description}>Card Description</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  vie: {
    width: 400,
    backgroundColor: "red",
  },
  card: {
    width: 300, // Adjust the width as needed
    height: 100, // Adjust the height as needed
    resizeMode: "cover", // Image will cover the container
    // borderRadius:100,
    overflow: "hidden", // Clip image overflow
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContent: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
    padding: 10,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    color: "white",
    fontSize: 16,
  },
});
