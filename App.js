import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './src/redux/modules/rootReducer';
import { default as HomeScreen } from "./src/screen/HomeScreen";
import { default as FirstScreen } from "./src/screen/FirstScreen";
import { default as SecondScreen } from "./src/screen/SecondScreen";
import { default as PropsScreen } from "./src/screen/PropsScreen";
import { default as UseStateScreen } from "./src/screen/UseStateScreen";
import { default as UseEffectScreen } from "./src/screen/UseEffectScreen";
import { default as UseContextScreen } from "./src/screen/UseContextScreen";
import { default as UseMemoScreen } from "./src/screen/UseMemoScreen";
import { default as UseCallbackScreen } from "./src/screen/UseCallbackScreen";
import { default as UseRefScreen } from "./src/screen/UseRefScreen";
import { default as ReduxScreen } from "./src/screen/ReduxScreen";

enableScreens();
const Stack = createStackNavigator();

function App() {
  const store = createStore(rootReducer);
  
  return (
    <Provider store={store}>
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
          <Stack.Screen name="UseCallbackScreen" component={UseCallbackScreen} />
          <Stack.Screen name="UseRefScreen" component={UseRefScreen} />
          <Stack.Screen name="ReduxScreen" component={ReduxScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
