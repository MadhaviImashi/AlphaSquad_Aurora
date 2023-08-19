import { NavigationContainer } from "@react-navigation/native";
import Test1 from "./src/pages/test_page_1";
import Test2 from "./src/pages/test_page_2";
import Tabs from "./src/components/molecules/navigationBar/BottomAppBar";
import SelectedPlanetDetailsPage from "./src/pages/SelectedPlanetDetailsPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateNewBookingPage from "./src/pages/CreateNewBookingPage";
import CreateNewBookingSecondPage from "./src/pages/CreateNewBookingSecondPage";
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="tabNavigator"
        options={{ headerShown: false }}
        component={Tabs}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        component={SelectedPlanetDetailsPage}
        name="SelectedPlanetDetailsPage"
      />
      <Stack.Screen
        options={{ headerShown: false }}
        component={Test1}
        name="Test1"
      />
      <Stack.Screen
        options={{ headerShown: false }}
        component={CreateNewBookingPage}
        name="CreateNewBookingPage"
      />
      <Stack.Screen
        options={{ headerShown: false }}
        component={CreateNewBookingSecondPage}
        name="CreateNewBookingSecondPage"
      />
    </Stack.Navigator>
  );
};

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default function App() {
  return <RootNavigation />;
}
