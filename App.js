import { NavigationContainer } from "@react-navigation/native";
import Test1 from "./src/pages/test_page_1";
import Test2 from "./src/pages/test_page_2";
import Tabs from "./src/navigation/Tabs";


export default function App() {
  return (
   <NavigationContainer >
    <Tabs/>
   </NavigationContainer>
  );
}
