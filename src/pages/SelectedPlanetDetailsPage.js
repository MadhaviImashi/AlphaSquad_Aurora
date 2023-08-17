import BackgroundTemplate from "../components/templates/BackgroundTemplate";
import React from 'react';
import { View, ImageBackground, Image, StyleSheet, Text, ScrollView, TouchableOpacity, Button } from 'react-native';
import TextHeading from "../components/atoms/texts/TextHeading";
import IconBackwardArrow from "../components/atoms/icons/IconBackwardArrow";
import TextBody from "../components/atoms/texts/TextBody";
import IconFavorite from "../components/atoms/icons/IconFavorite";
import IconPlanet from "../components/atoms/icons/IconPlanet";

const SelectedPlanetDetailsPage = ({img, data}) => {
  return (
    <BackgroundTemplate>
      <View style={[styles.planetDetailsPageContainer, {}]}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/Mars.png')}
            style={styles.dynamicImage}
          />
          <View style={styles.favIconContainer}>
            <IconFavorite></IconFavorite>
          </View>
          <View style={styles.backIconContainer}>
            <IconBackwardArrow></IconBackwardArrow>
          </View>
        </View>
        <ScrollView>
            <View style={styles.secondHalf}>
                <View style={styles.textContainer}>
                    <TextHeading value={'Mars'} textAlign={'left'} lineHeight={54} marginBottom={8}></TextHeading>
                    <View style={styles.subTitle}>
                        <TouchableOpacity>
                            <TextBody value={'Overview'} fontSize={18} fontWeight={600} color={'#43D2FF'} lineHeight={27} right={70}></TextBody>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <TextBody value={'Reviews'} fontSize={18} fontWeight={600} lineHeight={27}></TextBody>      
                        </TouchableOpacity>
                    </View>
                    <View style={styles.planetIconContainer}>
                            <View style={styles.iconGroup}>
                                <View style={styles.icon}>
                                    <IconPlanet source={require('../assets/images/planetIcons/star.png')}></IconPlanet>
                                </View>
                                <View style={styles.iconInfo}>
                                    <TextBody value={'4.5'} fontSize={18} fontWeight={700} lineHeight={27}></TextBody>
                                    <TextBody value={'Ratings'} fontSize={15} fontWeight={400} lineHeight={22.5}></TextBody>
                                </View>
                            </View>
                            <View style={styles.iconGroup}>
                                <View style={styles.icon}>
                                    <IconPlanet source={require('../assets/images/planetIcons/cloud.png')} width={27} height={19}></IconPlanet>
                                </View>
                                <View style={styles.iconInfo}>
                                    <TextBody value={'38 °C'} fontSize={18} fontWeight={700} lineHeight={27}></TextBody>
                                    <TextBody value={'Temperature'} fontSize={15} fontWeight={400} lineHeight={22.5}></TextBody>
                                </View>
                            </View>
                            <View style={styles.iconGroup}>
                                <View style={styles.icon}>
                                    <IconPlanet source={require('../assets/images/planetIcons/rocketRed.png')} width={21} height={21}></IconPlanet>
                                </View>
                                <View style={styles.iconInfo}>
                                    <TextBody value={'8 Days'} fontSize={18} fontWeight={700} lineHeight={27}></TextBody>
                                    <TextBody value={'Duration'} fontSize={15} fontWeight={400} lineHeight={22.5}></TextBody>
                                </View>
                            </View>
                    </View>
                    <TextBody value={
        "Mars is the fourth planet from the sun and has a distinct rusty red appearance and two unusual moons.\n\n" +
        "The Red Planet is a cold, desert world within our solar system. It has a very thin atmosphere, but the dusty, lifeless (as far as we know it) planet is far from dull." +
        " Phenomenal dust storms can grow so large they engulf the entire planet, temperatures can get so cold that carbon dioxide in the atmosphere condenses directly into snow or frost, and marsquakes — a Mars version of an earthquake — regularly shake things up.\n\n" + "Therefore, it is no surprise that this little red rock continues to intrigue scientists and is one of the most explored bodies in the solar system, according to NASA Science." +        "The Red Planet is a cold, desert world within our solar system. It has a very thin atmosphere, but the dusty, lifeless (as far as we know it) planet is far from dull.\n\n"
    }
                            textAlign={'justify'}
                            fontSize={14}
                            fontWeight={400}
                        >
                    </TextBody>
                </View>
                </View>
              </ScrollView>
              <View style={styles.bookNowButtonContainer}>
                  <View style={styles.planetPrice}>
                      <View style={styles.priceText}>
                          <TextBody value={'Total Price'} fontSize={18} fontWeight={600} color={'black'}></TextBody>
                      </View>
                      <View style={styles.price}>
                          <TextBody value={'$ 3000.00'} fontSize={22} fontWeight={700} color={'black'} lineHeight={28}></TextBody>
                      </View>
                  </View>
                  <View>
                      <TouchableOpacity>
                          <View style={styles.bookNowBtnCover}>
                            <TextBody style={styles.bookNowBtn} textAlign={'center'} value={'Book Now'} fontSize={18} color={'white'} lineHeight={30}></TextBody>
                          </View>
                      </TouchableOpacity>
                  </View>
               </View>
      </View>
    </BackgroundTemplate>
  );
};

const styles = StyleSheet.create({
  planetDetailsPageContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: '',
    alignItems: 'center',
    paddingHorizontal: 0,
  },
  imageContainer: {
    position: 'relative',
    left: 0,
    right: 0,
  },
  dynamicImage: {
    width: '100%',
    height: 'undefined',
    // height: '40%', 
    borderBottomLeftRadius: 44,
    borderBottomRightRadius: 44,
    aspectRatio: 27 / 22, //to adjust the height of the dynamic img
  },
  favIconContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: '90%',
    right: '10%',
    transform: [{ translateY: -15 }], // move 15 units upward from its original position
  },
  backIconContainer: {
    position: 'absolute',
    alignSelf: 'flex-start',
    top: '15%',
    left: '8%'
    },
    secondHalf: {
      position: 'relative',
    },
  textContainer: {
    minHeight: '50%',
    padding: 30,
    paddingTop: 20,
  },
    textContent: {
        marginTop: 20,
    },
    subTitle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 20
  },
    // icon group styles
    planetIconContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconGroup: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 25
    },
    icon: {
        marginRight: 8,
        verticalAlign: 'middle',
        paddingTop: 10
    },
    iconInfo: {
        display: 'flex',
        flexDirection: 'column'
    },
    // bottom nav bar
    // bottomNavButtonContainer: {
    //     position: 'absolute',
    //     alignSelf: 'center',
    //     top: '90%',
    //     right: '10%',
    // },
    bookNowButtonContainer: {
        // minWidth: 300,
        alignSelf: 'center',
        // width: '83%',
        minHeight: 85,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderTopLeftRadius: 22,
        borderTopRightRadius: 22,
    },
    planetPrice: {
        display: 'flex',
        flexDirection: 'column',
        color: 'black',
        // backgroundColor: 'yellow', 
        paddingRight: 75,
    },
    priceText: {

    },
    price: {

    },
    bookNowBtnCover: {
        backgroundColor: '#310D4E',
        color: 'white',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 20,
        fontSize: 18
    },
    bookNowBtn: {
        textAlignVertical: 'center'
    }
});

export default SelectedPlanetDetailsPage;
