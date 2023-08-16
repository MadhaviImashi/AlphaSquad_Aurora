import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TextHeading1 from "./src/components/atoms/texts/TextHeading1";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import RoundIconButton from "./src/components/atoms/buttons/ButtonRoundedBackward";
import BackgroundImage from "./src/components/templeates/BackgroundTempleate";
import IconProfileData from "./src/components/atoms/icons/IconProfileData";
import IconNavigationBar from "./src/components/atoms/icons/IconNavigationBar";
import CardTripsHistoryItem from "./src/components/molecules/ItemCards/CardTripsHistoryItem";
import IconPlanet from "./src/components/atoms/icons/IconPlanet";

export default function App() {
  return (
    <View style={styles.container}>
      <BackgroundImage source={require("./src/assets/images/SignIn.png")}>
        <Text>Open up App.js to start working on your app!</Text>
        <TextHeading1 value={"Test"} fontSize={10} />
        <MaterialCommunityIcons
          name="alarm-light"
          size={24}
          color="red"
          onPress={() => {
            handleDeleteItem(itemId);
            setselectedEventTitle(item.title);
          }}
        />
        <RoundIconButton onPress={() => console.log("Button pressed")} />
        <StatusBar style="auto" />
        <IconProfileData
          source={require("./src/assets/images/profileIcons/payment.png")}
        />
        <IconNavigationBar
          source={require("./src/assets/images/navigationBar/earth.png")}
          onPress={() => console.log("Button pressed")}
        />

        <IconPlanet
          source={require("./src/assets/images/planetIcons/cloud.png")}
        />

        <CardTripsHistoryItem />
      </BackgroundImage>
    </View>
  );
}

const styles = StyleSheet.create({
  test: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
