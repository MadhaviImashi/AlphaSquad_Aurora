import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View } from "react-native";

import Test1 from "../../../pages/test_page_1";
import Home from "../../../pages/Home";
import BookingHistory from "../../../pages/BookingHistory";

// import SelectedPlanetDetailsPage from "../pages/SelectedPlanetDetailsPage";
// import IconNavigationBar from "../components/atoms/icons/IconNavigationBar";
// // import Test1 from "../pages/test_page_1";
// import Home from "../pages/Home";
// import BookingHistory from "../pages/BookingHistory";

const Tab = createBottomTabNavigator();

export default BottomAppBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          paddingLeft: 15,
          paddingRight: 15,
          left: 40,
          right: 40,
          elevation: 2,
          backgroundColor: "white",
          borderRadius: 22,
          border: 5,
          borderColor: "black",
          height: 78,
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
        // tabBarActiveTintColor: "blue",
        // tabBarInactiveTintColor: "gray",
        tabBarLabel: () => null,
        tabBarIcon: ({ focused }) => {
          let iconImagePath;
          let name;

          if (route.name === "home") {
            iconImagePath = focused
              ? require("../../../assets/images/navigationBar/selectedHouse.png")
              : require("../../../assets/images/navigationBar/house.png");
          } else if (route.name === "test2") {
            iconImagePath = focused
              ? require("../../../assets/images/navigationBar/selectedcase.png")
              : require("../../../assets/images/navigationBar/case.png");
          } else if (route.name === "test3") {
            iconImagePath = focused
              ? require("../../../assets/images/navigationBar/selectedEarth.png")
              : require("../../../assets/images/navigationBar/earth.png");
          } else if (route.name === "test4") {
            iconImagePath = focused
              ? require("../../../assets/images/navigationBar/selectedRocket.png")
              : require("../../../assets/images/navigationBar/rocket.png");
          } else if (route.name === "test5") {
            name = "profile";
            iconImagePath = focused
              ? require("../../../assets/images/navigationBar/selectedProfile.png")
              : require("../../../assets/images/navigationBar/profile.png");
          }

          return <Image source={iconImagePath} name={name} />;
        },
      })}
    >
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="test2" component={BookingHistory} />
      <Tab.Screen name="test3" component={Test1} />
      <Tab.Screen name="test4" component={Home} />
      <Tab.Screen name="test5" component={Test1} />
    </Tab.Navigator>
  );
};
