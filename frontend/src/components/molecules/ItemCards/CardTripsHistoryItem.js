import React from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
import TransparentCard from "./../../../assets/images/TransparaentCard/TransparentCard.png";
import TextHeading from "../../atoms/texts/TextHeading";
import TextBody from "../../atoms/texts/TextBody";

export default function CardTripsHistoryItem({ source, children }) {
  return (

    <>
    {/* <ImageBackground source={TransparentCard} style={styles.background}>
        <View style={styles.content}>
          <Text style={[styles.titleHead, { fontWeight: 700, fontSize: 14 }]}>Trip #000648</Text>
          <Text style={[styles.description, { fontWeight: 500, fontSize: 12 }]}>Distance 364.67M Km</Text>
        </View>
        <View style={styles.content}>
          <Text style={[styles.titleHead, { fontSize: 10 }]}>From Earth</Text>
          <Text style={[styles.titleHead, { fontSize: 10 }]}>To Mars</Text>
        </View>
        <View style={styles.content}>
          <Text style={[styles.titleHead, { fontWeight: 700, fontSize: 14 }]}>
            Card Title
          </Text>
          <Text style={[styles.description, { fontWeight: 500, fontSize: 12 }]}>
            Card Description
          </Text>
        </View>
        </ImageBackground> */}
          <ImageBackground source={TransparentCard} style={styles.background}>
          <View style={styles.content}>
            <TextHeading value={'Trip #000648'} fontSize={14} lineHeight={20}></TextHeading>
            <TextBody value={'Distance 364.67M Km'} fontSize={12} lineHeight={20} fontWeight={500}></TextBody>
          </View>
          <View style={styles.content}>
            <TextBody value={'From Earth'} fontSize={10}></TextBody>
            <TextBody value={'To Mars'} fontSize={10}></TextBody>
          </View>
          <View style={styles.content}>
            <TextHeading value={'Card Title'} fontSize={14} lineHeight={20}></TextHeading>
            <TextBody value={'Card Description'} fontSize={12} lineHeight={20} fontWeight={500}></TextBody>
          </View>
        </ImageBackground>
    </>
    
  );
}

const styles = StyleSheet.create({

  background: {
    borderRadius: 10,
    width: 360,
    height: 100,
    padding: 20,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 16,
  },
  // titleHead: {
  //   color: "white",
  //   lineHeight:20
  // },
  // description: {
  //   color: "white",
  //   fontSize: 10,
  // },
});
