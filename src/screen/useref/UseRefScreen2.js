import React, { useState, useRef } from "react";
import { StyleSheet, View, Text, Button } from 'react-native';

const UseRefScreen2 = () => {
  let letValue = 0;
  const [stateValue, setStateValue] = useState(0);
  const refValue = useRef(0);

  const onChangeLetValue = () => {
    letValue = letValue+1;
    console.log('letValue : ' + letValue);
  };

  const onChangeStateValue = () => {
    setStateValue(stateValue+1);
    console.log('stateValue : ' + stateValue);
  };

  const onChangeRefValue = () => {
    refValue.current = refValue.current+1;
    console.log('refValue.current : ' + refValue.current);
  };

  console.log('렌더링...');
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>{letValue}</Text>
      <Button
        title="let 변수 값 변경"
        onPress={onChangeLetValue}
      />

      <Text style={styles.text}>{stateValue}</Text>
      <Button
        title="state 변수 값 변경"
        onPress={onChangeStateValue}
      />

      <Text style={styles.text}>{refValue.current}</Text>
      <Button
        title="ref 변수 값 변경"
        onPress={onChangeRefValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  text: {
    fontSize: 20,
    textAlign: 'center'
  }
})

export default UseRefScreen2