import {
  FlatList,
  Image,
  ImageBackground,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import BackgroundTemplate from "../components/templates/BackgroundTemplate";
import TextHeading from "../components/atoms/texts/TextHeading";
import TextBody from "../components/atoms/texts/TextBody";
import CardTripsHistoryItem from "../components/molecules/ItemCards/CardTripsHistoryItem";
import { useState } from "react";
import ButtonBookNow from "../components/atoms/buttons/ButtonBookNow";
import ProfileDetail from "../components/molecules/profileDetail";

export default BookingHistory = ({ navigation }) => {
  //refresh state
  const [refresh, setRefresh] = useState(false);

  //refresh handler
  const pullUp = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 200);
  };
  const testArray = [
    {
      tripNo: "#000648",
      distance: "364.67M Km",
      from: "Earth",
      to: "Mars",
      price: "$ 8456.00",
      date: "2200.08.16",
    },
    {
      tripNo: "#000648",
      distance: "364.67M Km",
      from: "Earth",
      to: "Mars",
      price: "$ 8456.00",
      date: "2200.08.16",
    },
    {
      tripNo: "#000648",
      distance: "364.67M Km",
      from: "Earth",
      to: "Mars",
      price: "$ 8456.00",
      date: "2200.08.16",
    },
  ];

  const onPress = () => {
    navigation.navigate("CreateNewBookingPage");
  };

  return (
    <BackgroundTemplate
      justifyContent="flex-start"
      alignItems={"flex-start"}
      paddingTop={80}
    >
      <View style={styles.container}>
        {/*  profile Details */}
        <View>
          <ProfileDetail
            userName="Ravindu Dananjith"
            travelerType="Space Traveler"
          />
        </View>
        {/* tripSection */}
        <View style={styles.tripSection}>
          <ImageBackground
            style={styles.previousTrips}
            source={require("../assets/images/booking/previousTrips.png")}
          >
            <View style={styles.previousTripsCountTitle}>
              <TextHeading
                value={"Previous Trips "}
                fontSize={16}
                color={"black"}
                fontWeight={400}
              />
            </View>
            <View style={styles.previousTripsCount}>
              <TextHeading
                value={"10"}
                fontSize={38}
                color={"black"}
                fontWeight={700}
              />
            </View>
          </ImageBackground>
          <ImageBackground
            style={styles.upcomingTrips}
            source={require("../assets/images/booking/upcomingTrips.png")}
          >
            <View style={styles.previousTripsCountTitle}>
              <TextHeading
                value={"Upcoming Trips"}
                fontSize={16}
                color={"white"}
                fontWeight={400}
              />
            </View>
            <View style={styles.previousTripsCount}>
              <TextHeading
                value={"10"}
                fontSize={38}
                color={"white"}
                fontWeight={700}
              />
            </View>
          </ImageBackground>
        </View>
        {/* Previous Trips History */}
        <View style={styles.tripHistory}>
          <TextHeading
            value={"Previous Trips History"}
            fontSize={20}
            fontWeight={500}
          />
        </View>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refresh} onRefresh={() => pullUp()} />
          }
        >
          <View style={styles.cardTrips}>
            <FlatList
              data={testArray}
              renderItem={({ item }) => (
                <View>
                  <CardTripsHistoryItem
                    tripNo={item.tripNo}
                    distance={item.distance}
                    to={item.to}
                    price={item.price}
                    date={item.date}
                  />
                </View>
              )}
            />
            <View>
              <ButtonBookNow ButtonName={"Book Now"} onPress={onPress} />
            </View>
          </View>
        </ScrollView>
      </View>
    </BackgroundTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
  },
  mainDetails: {
    display: "flex",
    flexDirection: "row",
  },
  profileDetails: {
    bottom: 5,
    paddingLeft: 10,
  },
  tripHistory: {
    paddingTop: 20,
  },
  tripSection: {
    display: "flex",
    flexDirection: "row",
    right: 30,
    paddingTop: 50,
  },
  //previousTrips
  previousTrips: {
    borderRadius: 10,
    width: 200,
    height: 88,
    padding: 20,
  },
  previousTripsCountTitle: {
    bottom: 20,
    left: 25,
  },
  previousTripsCount: {
    bottom: 20,
    left: 25,
  },
  upcomingTrips: {
    borderRadius: 10,
    width: 200,
    height: 88,
    padding: 20,
    right: 15,
  },
  cardTrips: {
    right: 23,
    paddingTop: 10,
    paddingBottom: 200,
  },
});
