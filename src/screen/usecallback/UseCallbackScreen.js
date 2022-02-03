import React, { useState } from "react";
import { StyleSheet, View, Button } from 'react-native';
import UseCallbackComponent from "./UseCallbackComponent";

const UseCallbackScreen = () => {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(number + 1);
  }
  const onDecrease = () => {
    setNumber(number - 1);
  }

  console.log("랜더링...");
  return (
    <View style={styles.screen}>
      <Button
        title="더하기"
        onPress={onIncrease}
      />
      <Button
        title="빼기"
        onPress={onDecrease}
      />
      <UseCallbackComponent count={count} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})

export default UseCallbackScreen