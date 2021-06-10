import React from "react";
import { View, Text, Button } from 'react-native';

const HomeScreen = ({navigation}) => {  
  return (
    <View style={{flex: 1, backgroundColor: '#cccccc'}}>
      <Text style={{fontSize: 40, fontWeight: 'bold', marginBottom: 40}}>[HomeScreen]</Text>
      <Button
        title="Go FirstScreen"
        onPress={() => navigation.navigate('FirstScreen', { screen_name: "[FirstScreen]" })}
      />
      <Button
        title="Go SecondScreen"
        onPress={() => navigation.navigate('SecondScreen')}
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
    </View>
  );
};

export default HomeScreen
