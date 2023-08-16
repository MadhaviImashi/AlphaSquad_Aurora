import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TextHeading1 from './src/components/atoms/Texts/TextHeading1'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TextHeading1 value={"Test"} fontSize={10}/>
      <MaterialCommunityIcons name="alarm-light" size={24} color="red" onPress={() => { handleDeleteItem(itemId); setselectedEventTitle(item.title); }} />
      <Ionicons name="chevron-back" size={24} color="black" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
