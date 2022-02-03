import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './src/redux/modules/rootReducer';
import Logger from './src/redux/middlewares/Logger';
import { default as HomeScreen } from "./src/screen/HomeScreen";
import { default as NavigationScreen } from "./src/screen/navigation/NavigationScreen";
import { default as PassingParameterScreen } from "./src/screen/passingparameter/PassingParameterScreen";
import { default as PropsScreen } from "./src/screen/props/PropsScreen";
import { default as UseStateScreen } from "./src/screen/usestate/UseStateScreen";
import { default as UseEffectScreen } from "./src/screen/useeffect/UseEffectScreen";
import { default as UseContextScreen } from "./src/screen/usecontext/UseContextScreen";
import { default as UseMemoScreen } from "./src/screen/usememo/UseMemoScreen";
import { default as UseCallbackScreen } from "./src/screen/usecallback/UseCallbackScreen";
import { default as UseRefScreen1 } from "./src/screen/useref/UseRefScreen1";
import { default as UseRefScreen2 } from "./src/screen/useref/UseRefScreen2";
import { default as ReduxScreen } from "./src/screen/redux/ReduxScreen";
import { default as NativeModuleScreen } from "./src/screen/nativemodule/NativeModuleScreen";
import { default as EnvScreen } from "./src/screen//env/EnvScreen";

enableScreens();
const Stack = createStackNavigator();

function App() {
  const store = createStore(rootReducer, applyMiddleware(Logger));

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator  initialRouteName = "HomeScreen">
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="NavigationScreen" component={NavigationScreen} />
          <Stack.Screen name="PassingParameterScreen" component={PassingParameterScreen} />
          <Stack.Screen name="PropsScreen" component={PropsScreen} />
          <Stack.Screen name="UseStateScreen" component={UseStateScreen} />
          <Stack.Screen name="UseEffectScreen" component={UseEffectScreen} />
          <Stack.Screen name="UseContextScreen" component={UseContextScreen} />
          <Stack.Screen name="UseMemoScreen" component={UseMemoScreen} />
          <Stack.Screen name="UseCallbackScreen" component={UseCallbackScreen} />
          <Stack.Screen name="UseRefScreen1" component={UseRefScreen1} />
          <Stack.Screen name="UseRefScreen2" component={UseRefScreen2} />
          <Stack.Screen name="ReduxScreen" component={ReduxScreen} />
          <Stack.Screen name="NativeModuleScreen" component={NativeModuleScreen} />
          <Stack.Screen name="EnvScreen" component={EnvScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
