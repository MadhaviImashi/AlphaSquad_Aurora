import React from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
import TransparentCard from "./../../../assets/images/TransparaentCard/TransparentCard.png";
import TextHeading from "../../atoms/texts/TextHeading";
import TextBody from "../../atoms/texts/TextBody";

export default function CardTripsHistoryItem({ tripNo, distance,from,to,price,date }) {

  return (
    <>
      <ImageBackground source={TransparentCard} style={styles.background}>
        <View style={styles.content}>
          <TextHeading
            value={`Trip ${tripNo}`}
            fontSize={14}
            lineHeight={20}
          ></TextHeading>
          <TextBody
            value={`Distance ${distance}`}
            fontSize={12}
            lineHeight={20}
            fontWeight={500}
          ></TextBody>
        </View>
        <View style={styles.content}>
          <TextBody value={`From ${from}`} fontSize={10}></TextBody>
          <TextBody value={`To ${to}`} fontSize={10}></TextBody>
        </View>
        <View style={styles.content}>
          <TextHeading
            value={`Cost ${price}`}
            fontSize={14}
            lineHeight={20}
          ></TextHeading>
          <TextBody
            value={`Date  ${date}`}
            fontSize={12}
            lineHeight={20}
            fontWeight={500}
          ></TextBody>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    borderRadius: 10,
    width: 380,
    height: 100,
    padding: 20,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 16,
  },
});
