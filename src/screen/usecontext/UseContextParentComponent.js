import React from "react";
import { StyleSheet, View, Text } from 'react-native';
import UseContextChildrenComponent from "./UseContextChildrenComponent";

function UseContextParentComponent() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>[UseContextParentComponent]</Text>
      <UseContextChildrenComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    margin: 10,
    padding: 5,
    backgroundColor: '#ffff00',
  },
  text: {
    fontSize: 20
  }
})

export default UseContextParentComponent
