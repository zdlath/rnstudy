import React from "react";
import { View, Text } from 'react-native'; 

function PropsComponent(props) {
  return (
    <View>
      <Text style={{fontSize: 20}}>Product : {props.product} Price : {props.price}</Text>
    </View>
  );
}

export default PropsComponent
