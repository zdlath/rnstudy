import React from "react";
import { StyleSheet, View, Text } from 'react-native';

const PassingParameterScreen = ({route}) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>HomeScreen에서 넘겨받은 Parameter입니다.</Text>
      <Text style={styles.text}>====================</Text>
      <Text style={styles.text}>fromScreenId : {route.params.fromScreenId}</Text>
      <Text style={styles.text}>fromScreenName : {route.params.fromScreenName}</Text>
      <Text style={styles.text}>otherParam : {route.params.otherParam}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  text: {
    fontSize: 20
  }
})

export default PassingParameterScreen
