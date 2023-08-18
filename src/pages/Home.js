import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import BackgroundTemplate from "../components/templates/BackgroundTemplate";
import ImageSlider from '../components/organisms/ImageSliders/PopularPlanetSlider';
import SearchBar from '../components/molecules/SearchBar';
import TextBody from '../components/atoms/texts/TextBody'
import IconEmergencyAssistance from '../components/atoms/icons/IconEmergencyAssistance';
import TextHeading from '../components/atoms/texts/TextHeading';
import CardPopularDestinationLarge from '../components/molecules/ItemCards/CardPopularDestinationLarge';

export default function Home() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios.get(apiUrl)
  //     .then(response => {
  //       setData(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, [apiUrl]);
  
  const data = [
    {
      id: 1,
      title: 'Product 1',
      price: 29.99,
      imageSrc: '../../../assets/images/mars2.jpeg',
    },
    {
      id: 2,
      title: 'Product 2',
      price: 19.99,
      imageSrc: '../assets/images/mars2.jpeg',
    },
    {
      id: 3,
      title: 'Product 3',
      price: 39.99,
      imageSrc: '../assets/images/SignIn.png',
    },
  ];
  
  const planetImgSrcs = [
    require('../assets/images/mars2.jpeg'), 
    require('../assets/images/mercury.jpeg'), 
    require('../assets/images/mars2.jpeg'), 
    require('../assets/images/SignIn.png'), 
    require('../assets/images/mars2.jpeg'), 
    require('../assets/images/mars2.jpeg'), 
    require('../assets/images/mars2.jpeg'), 
  ];

  return (
    <BackgroundTemplate>
        <View style={styles.container}>
            <View style={styles.topPartContainer}>
            <View style={styles.topPart}>
              <View style={styles.appNameContainer}>
                <Image source={require('../assets/images/appLogo.png')} style={{marginRight: 12, width: 22, height: 19}}></Image>
                <TextHeading value={'Aurora'}></TextHeading>
              </View>
              <View style={styles.searchBarContainer}>
                <SearchBar></SearchBar>
              </View>
              <View style={styles.commonTitleContainer}>
                <TextHeading value={'Emergency Assistance'} fontSize={26} lineHeight={39} fontWeight={600} textAlign={'center'}></TextHeading>
                <TouchableOpacity><TextBody value={'See all'} fontSize={14} lineHeight={24} fontWeight={600} color={'blue'} textAlign={'center'}></TextBody></TouchableOpacity>
              </View>
                <View style={styles.emergencyBarContainer}>
                <View style={[styles.emergencyItemContainer, {marginRight:  '4%'}]}>
                  <View style={styles.emergencyIcon}>
                      <IconEmergencyAssistance
                        source={require("../assets/images/emergencyIcons/emProtocol.png")}
                      />
                  </View>
                  <View style={styles.emergencyTitle}>
                    <TextBody value={"Emergency\n"+"Protocols"} lineHeight={15.4} textAlign={'center'} fontSize={14}></TextBody>
                  </View>
              </View>
              <View style={[styles.emergencyItemContainer, {marginRight: '4%'}]}>
                  <View style={styles.emergencyIcon}>
                      <IconEmergencyAssistance
                        source={require("../assets/images/emergencyIcons/UniversalTranslator.png")}
                      />
                  </View>
                  <View style={styles.emergencyTitle}>
                    <TextBody value={"Universal\n"+"Translator"} lineHeight={15.4} textAlign={'center'} fontSize={14}></TextBody>
                  </View>
              </View>
              <View style={[styles.emergencyItemContainer, {marginRight:  '4%'}]}>
                  <View style={styles.emergencyIcon}>
                      <IconEmergencyAssistance
                        source={require("../assets/images/emergencyIcons/DistressBeacon.png")}
                      />
                  </View>
                  <View style={styles.emergencyTitle}>
                    <TextBody value={"Distress\n"+"Beacon"} lineHeight={15.4} textAlign={'center'} fontSize={14}></TextBody>
                  </View>
              </View>
              <View style={styles.emergencyItemContainer}>
                  <View style={styles.emergencyIcon}>
                      <IconEmergencyAssistance
                        source={require("../assets/images/emergencyIcons/TechnicalSupport.png")}
                      />
                  </View>
                  <View style={styles.emergencyTitle}>
                    <TextBody value={"Technical\n"+"Support"} lineHeight={15.4} textAlign={'center'} fontSize={14}></TextBody>
                  </View>
                </View>
              </View>
            </View> 
            </View>
            {/* from slider onwards comes below */}
            <View style={styles.secondPartContainer}>
            <ScrollView>
                <View style={styles.titleOuterContainer}>
                  <View style={styles.commonTitleContainer}>
                            <TextHeading value={'Popular Destinations'} fontSize={26} lineHeight={39} fontWeight={600} textAlign={'center'}></TextHeading>
                            <TouchableOpacity><TextBody value={'See all'} fontSize={14} lineHeight={24} fontWeight={600} color={'blue'} textAlign={'center'}></TextBody></TouchableOpacity>
                  </View>
                </View>
                <View style={styles.sliderContainer}>
                  <ImageSlider imageSources={planetImgSrcs} />
                </View>
                <View style={styles.titleOuterContainer}>
                  <View style={styles.commonTitleContainer}>
                            <TextHeading value={'Top Adventure Trips'} fontSize={26} lineHeight={39} fontWeight={600} textAlign={'center'}></TextHeading>
                            <TouchableOpacity><TextBody value={'See all'} fontSize={14} lineHeight={24} fontWeight={600} color={'blue'} textAlign={'center'}></TextBody></TouchableOpacity>
                  </View>
                </View>
                <View style={styles.listContainer}>
                  <FlatList
                      data={data}
                      keyExtractor={(item) => item.id.toString()}
                      renderItem={({ item }) => (
                        <CardPopularDestinationLarge
                          title={item.title}
                          price={item.price}
                          imageSrc={item.imageSrc}
                        />
                      )}
                      style={styles.cardList}
                    />
                </View>
              </ScrollView>
            </View>
            
          </View>
    </BackgroundTemplate>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 45,
  },
  topPartContainer: {
    marginHorizontal: 20,
  },
  topPart: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 32,
    height: '42%'
  },
  secondPartContainer: {
    height: '58%'
  },
  appNameContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 15,
    alignItems: 'center'
  },
  searchBarContainer: {
    marginBottom: 25
  },
  commonTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlignVertical: 'center',
    marginBottom: 15,
    alignItems: 'center'
  },
  emergencyBarContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  emergencyItemContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  emergencyTitle: {
    alignItems: 'center',
    marginTop: 2,
  },
  titleOuterContainer: {
    marginHorizontal: 32,
  },
  sliderContainer: {
    paddingLeft: 32,
    marginBottom: 28,
    minHeight: 296,
    maxHeight: 296,
  },
  listContainer: {
    marginHorizontal: 16,
    marginTop: -15,
    paddingBottom: 30,
  },
  cardList: {
    padding: 15
  }
});
