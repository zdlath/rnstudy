import React from "react";
import { StyleSheet, View, Text } from 'react-native'; 

const NavigationScreen = () => {

  return (
    <View style={styles.screen}>
      <Text>HomeScreen에서 NavigationScreen으로 이동했습니다.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})

export default NavigationScreen
