import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import ProfileDetail from "../components/molecules/profileDetail";
import BackgroundTemplate from "../components/templates/BackgroundTemplate";
import TextHeading from "../components/atoms/texts/TextHeading";
import Progress from "../components/atoms/progress/progress";
import planeCard from "../assets/images/booking/planeCard.png";
import destinationCard from "../assets/images/booking/destinationCard.png";
import dateCard from "../assets/images/booking/dateCard.png";
import ButtonBookNow from "../components/atoms/buttons/ButtonBookNow";
import CardBookingDropDown from "../components/molecules/ItemCards/CardBookingDropDown";
import CardBookingDate from "../components/molecules/ItemCards/CardBookingDate";

export default CreateNewBookingPage = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate("CreateNewBookingSecondPage");
  };

  return (
    <BackgroundTemplate justifyContent="flex-start" alignItems={"flex-start"}>
      <View style={styles.container}>
        <ProfileDetail
          userName="Ravindu Dananjith"
          travelerType="Space Traveler"
        />
        <View style={styles.heading}>
          <TextHeading
            value={"Book Your  "}
            fontSize={40}
            color={"white"}
            fontWeight={700}
            lineHeight={80}
          />
          <TextHeading
            value={"Ship"}
            fontSize={40}
            color={"white"}
            fontWeight={700}
            lineHeight={80}
            bottom={30}
          />
        </View>
        <View>
          <Progress status={"1"} />
        </View>

        {/* buttonSection */}
        <View style={styles.buttonSection}>
          <TouchableOpacity>
            <ImageBackground
              source={require("../assets/images/booking/oneWay.png")}
              style={styles.oneWayButton}
            >
              <View style={styles.buttonText}>
                <TextHeading
                  value={"Two way"}
                  fontSize={14}
                  color={"white"}
                  fontWeight={700}
                  lineHeight={80}
                  bottom={0}
                />
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageBackground
              source={require("../assets/images/booking/twoWay.png")}
              style={styles.twoWayButton}
            >
              <View style={styles.buttonText}>
                <TextHeading
                  value={"One way"}
                  fontSize={14}
                  color={"white"}
                  fontWeight={700}
                  lineHeight={80}
                  bottom={0}
                />
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.scrollView}>
            <View>
              <CardBookingDropDown
                cardImage={planeCard}
                state={"From"}
                location={"Test"}
              />
            </View>
            <View>
              <CardBookingDropDown
                cardImage={destinationCard}
                state={"To"}
                location={"Test"}
              />
            </View>
            <View>
              <CardBookingDate
                cardImage={dateCard}
                state={"To"}
                location={"Test"}
              />
            </View>
            <View>
              <CardBookingDate
                cardImage={dateCard}
                state={"To"}
                location={"Test"}
              />
            </View>
            <View style={styles.nextButton}>
              <ButtonBookNow ButtonName={"Next"} onPress={onPress} />
            </View>
          </View>
        </ScrollView>
      </View>
    </BackgroundTemplate>
  );
};

const styles = StyleSheet.create({
  buttonSection: {
    display: "flex",
    flexDirection: "row",
    gap: 22,
    paddingTop: 15,
  },
  twoWayButton: {
    width: 160,
    height: 65,
  },
  oneWayButton: {
    width: 160,
    height: 73,
  },
  buttonText: {
    left: 48,
    bottom: 7,
  },
  container: {
    paddingLeft: 30,
    paddingTop: 80,
  },
  heading: {
    paddingTop: 10,
  },
  scrollView: {
    paddingBottom: 200,
  },
  nextButton: {
    right: 12,
  },
});
