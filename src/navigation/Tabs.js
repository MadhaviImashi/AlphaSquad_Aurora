import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Test1 from "../pages/test_page_1";
import { Image, View } from "react-native";
import IconNavigationBar from "../components/atoms/icons/IconNavigationBar";
import Test2 from "../pages/test_page_2";

const Tab = createBottomTabNavigator();

export default Tabs = () => {
  return (
    // <Tab.Navigator
    //   screenOptions={{
    //     tabBarLabel: () => null,
    //     headerShown: false,
    //     tabBarStyle: {
    //       position: "absolute",
    //       bottom: 25,
    //       left: 20,
    //       right: 20,
    //       elevation: 0,
    //       backgroundColor: "white",
    //       borderRadius: 22,
    //       height: 80,
    //     },
    //     tabBarIcon: ({ focused }) => {
    //         let iconImagePath;

    //         // Determine the icon image path based on the route name
    //         if (route.name === "test1") {
    //           iconImagePath = focused
    //             ? require("../assets/images/navigationBar/case.png")
    //             : require("../assets/images/navigationBar/case.png");
    //         } else if (route.name === "test2") {
    //           iconImagePath = focused
    //             ? require("../assets/images/navigationBar/case.png")
    //             : require("../assets/images/navigationBar/case.png");
    //         }
    //         // Add more conditions for other tab screens

    //         return (
    //           <Image
    //             source={iconImagePath}
    //             style={{
    //               width: 24,
    //               height: 24,
    //               tintColor: focused ? "blue" : "gray", // Apply color based on focus
    //             }}
    //           />
    //         );
    //       },
    //   }}
    // >
    //   <Tab.Screen
    //     name="test1"
    //     component={Test1}
    //     options={{
    //       tabBarIcon: (focused) => (
    //         <View>
    //           <IconNavigationBar
    //             source={
    //               focused
    //                 ? require("../assets/images/navigationBar/case.png")
    //                 : require("../assets/images/navigationBar/earth.png")
    //             }
    //           />
    //         </View>
    //       ),
    //     }}
    //   />
    //   <Tab.Screen name="test2" component={Test1} />
    //   <Tab.Screen name="test3" component={Test1} />
    //   <Tab.Screen name="test4" component={Test1} />
    //   <Tab.Screen name="test5" component={Test1} />
    // </Tab.Navigator>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "white",
          borderRadius: 22,
          height: 80,
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
        // tabBarActiveTintColor: "blue",
        // tabBarInactiveTintColor: "gray",
        tabBarLabel: () => null,
        tabBarIcon: ({ focused }) => {
          let iconImagePath;

          if (route.name === "home") {
            iconImagePath = focused
              ? require("../assets/images/navigationBar/selectedHouse.png")
              : require("../assets/images/navigationBar/house.png");
          } else if (route.name === "test2") {
            iconImagePath = focused
              ? require("../assets/images/navigationBar/selectedcase.png")
              : require("../assets/images/navigationBar/case.png");
          } else if (route.name === "test3") {
            iconImagePath = focused
              ? require("../assets/images/navigationBar/selectedEarth.png")
              : require("../assets/images/navigationBar/earth.png");
          } else if (route.name === "test4") {
            iconImagePath = focused
              ? require("../assets/images/navigationBar/selectedRocket.png")
              : require("../assets/images/navigationBar/rocket.png");
          } else if (route.name === "test5") {
            iconImagePath = focused
              ? require("../assets/images/navigationBar/selectedProfile.png")
              : require("../assets/images/navigationBar/profile.png");
          }

          return (
            <Image
              source={iconImagePath}
              style={{
                width: 24,
                height: 24,
              }}
            />
          );
        },
      })}
    >
      <Tab.Screen name="home" component={Test1} />
      <Tab.Screen name="test2" component={Test2} />
      <Tab.Screen name="test3" component={Test1} />
      <Tab.Screen name="test4" component={Test1} />
      <Tab.Screen name="test5" component={Test1} />
    </Tab.Navigator>
  );
};
