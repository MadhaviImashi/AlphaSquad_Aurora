import { StyleSheet, View } from "react-native"
import IconPlanet from "../atoms/icons/IconPlanet";
import TextBody from "../atoms/texts/TextBody";

export default PlanetDetailsIconPalette = ({data}) => {
    return (
        <View style={styles.planetIconContainer}>
            <View style={styles.iconGroup}>
                <View style={styles.icon}>
                    <IconPlanet
                        source={require("../../assets/images/planetIcons/star.png")}
                    ></IconPlanet>
                </View>
                <View style={styles.iconInfo}>
                    <TextBody
                        value={"4.5"}
                        fontSize={18}
                        fontWeight={700}
                        lineHeight={27}
                    ></TextBody>
                    <TextBody
                        value={"Ratings"}
                        fontSize={15}
                        fontWeight={400}
                        lineHeight={22.5}
                    ></TextBody>
                </View>
            </View>
            <View style={styles.iconGroup}>
                <View style={styles.icon}>
                    <IconPlanet
                        source={require("../../assets/images/planetIcons/cloud.png")}
                        width={27}
                        height={19}
                    ></IconPlanet>
                </View>
                <View style={styles.iconInfo}>
                    <TextBody
                        value={"38 °C"}
                        fontSize={18}
                        fontWeight={700}
                        lineHeight={27}
                    ></TextBody>
                    <TextBody
                        value={"Temperature"}
                        fontSize={15}
                        fontWeight={400}
                        lineHeight={22.5}
                    ></TextBody>
                </View>
            </View>
            <View style={styles.iconGroup}>
                <View style={styles.icon}>
                    <IconPlanet
                        source={require("../../assets/images/planetIcons/rocketRed.png")}
                        width={21}
                        height={21}
                    ></IconPlanet>
                </View>
                <View style={styles.iconInfo}>
                    <TextBody
                        value={"8 Days"}
                        fontSize={18}
                        fontWeight={700}
                        lineHeight={27}
                    ></TextBody>
                    <TextBody
                        value={"Duration"}
                        fontSize={15}
                        fontWeight={400}
                        lineHeight={22.5}
                    ></TextBody>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
      // icon group styles
  planetIconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  icon: {
    marginRight: 8,
    verticalAlign: "middle",
    paddingTop: 10,
  },
  iconInfo: {
    display: "flex",
    flexDirection: "column",
  },
})