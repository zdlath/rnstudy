import React from "react";
import { View, Text } from 'react-native'; 

const FirstScreen = ({ navigation, route }) => {

  return (
    <View style={{flex: 1, backgroundColor: '#00FF00'}}>
      <Text style={{fontSize: 40, fontWeight: 'bold', marginBottom: 40}}>{route.params.screen_name}</Text>
    </View>
  );
};

export default FirstScreen
