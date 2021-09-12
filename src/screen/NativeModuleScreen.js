import React, { useState } from "react";
import { View, Text, Button, NativeModules } from 'react-native';

const NativeModuleScreen = () => {

  const getGreeting = () => {
    NativeModules.HellowModule.getGreeting(message => {
      alert(message);
    });
  }

  return (
    <View style={{flex: 1}}>
      <Button
        title="Native Module 함수 호출"
        onPress={getGreeting}
      />
    </View>
  );
};

export default NativeModuleScreen