import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './src/redux/modules/rootReducer';
import Middleware1 from './src/redux/middlewares/Middleware1';
import Middleware2 from './src/redux/middlewares/Middleware2';
import penderMiddleware from 'redux-pender';
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
import { default as ReduxActionScreen } from "./src/screen/redux/ReduxActionScreen";
import { default as ReduxPenderScreen } from "./src/screen/redux/ReduxPenderScreen";
import { default as NativeModuleScreen } from "./src/screen/nativemodule/NativeModuleScreen";
import { default as EnvScreen } from "./src/screen//env/EnvScreen";
import { default as GoogleMapScreen } from "./src/screen//googlemap/GoogleMapScreen";

enableScreens();
const Stack = createStackNavigator();

function App() {
  //creactStore() 함수를 이용하여 Store를 생성합니다.
  //rootReducer를 첫번째 파라미터로 전달하며, Middleware를 두번째 파라미터로 전달합니다.
  //const store = createStore(rootReducer);
  //const store = createStore(rootReducer, applyMiddleware(Middleware1, Middleware2));
  const store = createStore(rootReducer, applyMiddleware(penderMiddleware()));

  //Provider 컴포넌트는 컴포넌트들이 Redux의 Store에 접근 가능하도록 해주는 컴포넌트입니다.
  //컴포넌트의 Root 위치에 Provider 컴포넌트로 감싸줍니다.
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
          <Stack.Screen name="ReduxActionScreen" component={ReduxActionScreen} />
          <Stack.Screen name="ReduxPenderScreen" component={ReduxPenderScreen} />
          <Stack.Screen name="NativeModuleScreen" component={NativeModuleScreen} />
          <Stack.Screen name="EnvScreen" component={EnvScreen} />
          <Stack.Screen name="GoogleMapScreen" component={GoogleMapScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
