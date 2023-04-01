import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Homescreen from './screens/Home';
import Isslocation from './screens/Isslocation';
import Meteor from './screens/Meteor';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
const Stack=createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}} >
        <Stack.Screen name ="Home" component={HomeScreen}/>
        <Stack.Screen name='SpaceCrafts' component={Homescreen} />
        <Stack.Screen name='DailyPic' component={Isslocation} />
        <Stack.Screen name='StarMap' component={Meteor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}