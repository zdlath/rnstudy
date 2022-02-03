import React from "react";
import { StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({navigation}) => {  
  return (
    <View style={styles.screen}>
      <Button
        title="Go NavigationScreen"
        onPress={() => navigation.navigate('NavigationScreen')}
      />
      <Button
        title="Go PassingParameterScreen"
        onPress={() => navigation.navigate('PassingParameterScreen', {
          fromScreenId: 1,
          fromScreenName: 'HomeScreen',
          otherParam: 'anything you want here',
        })}
      />    
      <Button
        title="Go PropsScreen"
        onPress={() => navigation.navigate('PropsScreen')}
      />
      <Button
        title="Go UseStateScreen"
        onPress={() => navigation.navigate('UseStateScreen')}
      />
       <Button
        title="Go UseEffectScreen"
        onPress={() => navigation.navigate('UseEffectScreen')}
      />
      <Button
        title="Go UseContextScreen"
        onPress={() => navigation.navigate('UseContextScreen')}
      />
      <Button
        title="Go UseMemoScreen"
        onPress={() => navigation.navigate('UseMemoScreen')}
      />
      <Button
        title="Go UseCallbackScreen"
        onPress={() => navigation.navigate('UseCallbackScreen')}
      />      
      <Button
        title="Go UseRefScreen1"
        onPress={() => navigation.navigate('UseRefScreen1')}
      />         
      <Button
        title="Go UseRefScreen2"
        onPress={() => navigation.navigate('UseRefScreen2')}
      /> 
      <Button
        title="Go ReduxScreen"
        onPress={() => navigation.navigate('ReduxScreen')}
      />      
      <Button
        title="Go NativeModuleScreen"
        onPress={() => navigation.navigate('NativeModuleScreen')}
      />      
      <Button
        title="Go EnvScreen"
        onPress={() => navigation.navigate('EnvScreen')}
      />           
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})

export default HomeScreen
