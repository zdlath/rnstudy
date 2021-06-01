import React from "react";
import { View, Text } from 'react-native'; 

const FirstScreen = () => {

  return (
    <View style={{flex: 1, backgroundColor: '#00FF00'}}>
      <Text style={{fontSize: 40, fontWeight: 'bold', marginBottom: 40}}>[FirstScreen]</Text>
    </View>
  );
};

export default FirstScreen
