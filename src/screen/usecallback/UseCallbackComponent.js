import React from "react";
import { StyleSheet, View, Text } from 'react-native'; 

function UseCallbackComponent(props) {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{props.count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#00ffff',
    margin: 5
  },
  text: {
    fontSize: 20
  }
})

export default UseCallbackComponent
