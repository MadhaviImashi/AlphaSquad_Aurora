import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BackgroundTemplate from "../components/templates/BackgroundTemplate";
import IconBackwardArrow from "../components/atoms/icons/IconBackwardArrow";
import IconProfileData from "../components/atoms/icons/IconProfileData";
import IconNavigationBar from "../components/atoms/icons/IconNavigationBar";
import IconPlanet from "../components/atoms/icons/IconPlanet";
import CardTripsHistoryItem from "../components/molecules/ItemCards/CardTripsHistoryItem"
import TextBody from "../components/atoms/texts/TextBody";
import TextHeading from "../components/atoms/texts/TextHeading";
import IconEmergencyAssistance from "../components/atoms/icons/IconEmergencyAssistance";

export default function Test1() {
  return (
      <BackgroundTemplate>
        <Text>Open up App.js to start working on your app!</Text>
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
      
        {/* iconProfileData can be used to display: achievement, payment, privacy */}
        <IconProfileData
                source={require("../assets/images/profileIcons/payment.png")}
        />
      
        <View style={styles.content}>
          <IconEmergencyAssistance
              source={require("../assets/images/emergencyIcons/Group.png")}
          />
          <IconEmergencyAssistance
                source={require("../assets/images/emergencyIcons/DistressBeacon.png")}
          />
          <IconEmergencyAssistance
                source={require("../assets/images/emergencyIcons/TechnicalSupport.png")}
          />
          <IconEmergencyAssistance
                source={require("../assets/images/emergencyIcons/UniversalTranslator.png")}
              />
        </View>
      
        {/* iconNavigationBar can be used to display: house, case, earth, rocket, profile */}
        <IconNavigationBar
          source={require("../assets/images/navigationBar/earth.png")}
          onPress={() => console.log("Button pressed")}
        />

        {/* icon planet can be used to display: rating.png, temperature.png, cloud.png */}
        <View style={styles.content}>
          <IconPlanet
              source={require("../assets/images/planetIcons/star.png")}
            />
            <IconPlanet
              source={require("../assets/images/planetIcons/cloud.png")}
            />
            <IconPlanet
              source={require("../assets/images/planetIcons/rocketRed.png")}
            />
        </View>
        
        {/* custom texts */}
        <TextHeading value={'dkdkd dkdkd'}></TextHeading>
        <TextBody value={'dkdkd dkdkd'}></TextBody>

        <CardTripsHistoryItem />
      </BackgroundTemplate>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    // margin: 2,
  },
})
