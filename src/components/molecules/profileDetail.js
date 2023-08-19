import { Image, StyleSheet, View } from "react-native";
import TextHeading from "../atoms/texts/TextHeading";
import TextBody from "../atoms/texts/TextBody";
import profileIcon from "../../assets/images/profileIcons/profileIcon.png";
export default profileDetail = ({ userName, travelerType }) => {
  return (
    <View style={styles.mainDetails}>
      <View style={styles.profileIcon}>
        <Image source={profileIcon} />
      </View>
      <View style={styles.profileDetails}>
        <TextHeading value={userName} fontSize={18} />
        <TextBody value={travelerType} fontSize={14} bottom={10} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    
  profileDetails: {
    bottom: 5,
    paddingLeft: 10,
  },
  mainDetails: {
    display: "flex",
    flexDirection: "row",
  },
});
