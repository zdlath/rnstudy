import React from "react";
import { StyleSheet, View, Text } from 'react-native';
import Config from 'react-native-config'

const EnvScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>ENV : {Config.ENV}</Text>
      <Text style={styles.text}>APP ID : {Config.APP_ID}</Text>
      <Text style={styles.text}>Build Version : {Config.BUILD_VERSION}</Text>
      <Text style={styles.text}>App Version : {Config.APP_VERSION}</Text>
      <Text style={styles.text}>APP Name: {Config.APP_NAME}</Text>
      <Text style={styles.text}>API URL : {Config.APP_API_URL}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 40
  },
  text: {
    fontSize: 20,
  },
})

export default EnvScreen
