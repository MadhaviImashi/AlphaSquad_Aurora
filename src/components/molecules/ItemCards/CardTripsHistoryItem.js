import React from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
import TransparentCard from "./../../../assets/images/TransparaentCard/TransparentCard.png";

export default function CardTripsHistoryItem({ source, children }) {
  return (

      <ImageBackground source={TransparentCard} style={styles.background}>
        <View style={styles.content}>
          <Text style={[styles.titleHead, { fontWeight: 700, fontSize: 14 }]}>
            Trip #000648
          </Text>
          <Text style={[styles.description, { fontWeight: 500, fontSize: 12 }]}>
            Distance 364.67M Km
          </Text>
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
      </ImageBackground>
    
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
  titleHead: {
    color: "white",
    lineHeight:20
  },
  description: {
    color: "white",
    fontSize: 10,
  },
});
