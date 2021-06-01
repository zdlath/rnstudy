import React from "react";
import { View, Text, Button } from 'react-native';

const HomeScreen = ({navigation}) => {  
  return (
    <View style={{flex: 1, backgroundColor: '#FF0000'}}>
      <Text style={{fontSize: 40, fontWeight: 'bold', marginBottom: 40}}>[HomeScreen]</Text>
      <Button
        title="Go FirstScreen"
        onPress={() => navigation.navigate('First', { screen_name: "[FirstScreen]" })}
      />
      <Button
        title="Go SecondScreen"
        onPress={() => navigation.navigate('Second')}
      />
    </View>
  );
};

export default HomeScreen
