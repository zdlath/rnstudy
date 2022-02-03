import React from "react";
import { StyleSheet, View, Text } from 'react-native'; 

function PropsComponent(props) {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Product : {props.product}</Text>
      <Text style={styles.text}>Price : {props.price}</Text>
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

export default PropsComponent
