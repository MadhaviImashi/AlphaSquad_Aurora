// ImageSlider.js
import React from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';

const PopularPlanetSlider = ({ imageSources }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.sliderContainer}
    >
      {imageSources.map((source, index) => (
        <Image key={index} source={source} style={styles.imageCard} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  imageCard: {
    width: 214,
    minHeight: 296,
    maxHeight: 296,
    marginRight: 28,
    borderRadius: 22,
    resizeMode: 'cover'
  },
});

export default PopularPlanetSlider;
