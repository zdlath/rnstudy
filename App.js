import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import { default as HomeScreen } from "./src/screen/HomeScreen";
import { default as FirstScreen } from "./src/screen/FirstScreen";
import { default as SecondScreen } from "./src/screen/SecondScreen";
import { default as PropsScreen } from "./src/screen/PropsScreen";
import { default as UseStateScreen } from "./src/screen/UseStateScreen";
import { default as UseEffectScreen } from "./src/screen/UseEffectScreen";
import { default as UseContextScreen } from "./src/screen/UseContextScreen";
import { default as UseMemoScreen } from "./src/screen/UseMemoScreen";

enableScreens();
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName = "HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
        <Stack.Screen name="PropsScreen" component={PropsScreen} />
        <Stack.Screen name="UseStateScreen" component={UseStateScreen} />
        <Stack.Screen name="UseEffectScreen" component={UseEffectScreen} />
        <Stack.Screen name="UseContextScreen" component={UseContextScreen} />
        <Stack.Screen name="UseMemoScreen" component={UseMemoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
