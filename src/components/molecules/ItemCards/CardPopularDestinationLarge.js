import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import PlanetDetailIconPalette from '../PlanetDetailIconPalette';
import TextHeading from '../../atoms/texts/TextHeading';
import TextBody from '../../atoms/texts/TextBody';

const CardPopularDestinationLarge = ({ name, data, imageSrc }) => {
  return (
    <ImageBackground source={require('../../../assets/images/mars2.jpeg')} style={styles.card}>
          <View style={styles.cardContent}{...styles.overlay }>
        <View style={styles.textContainer}>
            <TextHeading
                value={"Mars"}
                textAlign={"left"}
                lineHeight={54}
              ></TextHeading>
            <TextBody
                value={"Mars is the fourth planet from the sun and has a distinct rusty red appearance and two unusual moons.\n\n" }
                textAlign={"justify"}
                fontSize={14}
                fontWeight={400}
              ></TextBody>
        </View>
        <PlanetDetailIconPalette></PlanetDetailIconPalette>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 200,
    // marginHorizontal: 15,
    marginBottom: 18,
    resizeMode: 'cover',
    borderRadius: 22,
        overflow: 'hidden',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 25,
        paddingVertical: '7%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: -21
  },
});

export default CardPopularDestinationLarge;
