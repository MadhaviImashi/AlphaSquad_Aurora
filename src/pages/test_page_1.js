import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TextHeading1 from "../components/atoms/texts/TextHeading1";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BackgroundTemplate from "../components/templates/BackgroundTemplate";
import IconBackwardArrow from "../components/atoms/icons/IconBackwardArrow";
import IconProfileData from "../components/atoms/icons/IconProfileData";
import IconNavigationBar from "../components/atoms/icons/IconNavigationBar";
import IconPlanet from "../components/atoms/icons/IconPlanet";
import CardTripsHistoryItem from "../components/molecules/ItemCards/CardTripsHistoryItem"

export default function Test1() {
  return (
      <BackgroundTemplate source={require("../assets/images/SignIn.png")}>
        <Text>Open up App.js to start working on your app!</Text>
        <TextHeading1 value={"Test"} fontSize={10} />
        <MaterialCommunityIcons
          name="alarm-light"
          size={24}
          color="red"
          onPress={() => {
            console.log('button pressed')
          }}
        />
        <IconBackwardArrow onPress={() => console.log("Button pressed")} />
        <StatusBar style="auto" />
        <IconProfileData
          source={require("../assets/images/profileIcons/payment.png")}
        />
        <IconNavigationBar
          source={require("../assets/images/navigationBar/earth.png")}
          onPress={() => console.log("Button pressed")}
        />

        <IconPlanet
          source={require("../assets/images/planetIcons/cloud.png")}
        />

        <CardTripsHistoryItem />
      </BackgroundTemplate>
  );
}

