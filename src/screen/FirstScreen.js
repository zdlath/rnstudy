import React from "react";
import { View, Text } from 'react-native'; 

const FirstScreen = ({ route }) => {

  return (
    <View style={{flex: 1, backgroundColor: '#ccffcc'}}>
      <Text style={{fontSize: 40, fontWeight: 'bold', marginBottom: 40}}>{route.params.screen_name}</Text>
    </View>
  );
};

export default FirstScreen
