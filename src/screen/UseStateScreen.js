import React, { useState } from "react";
import { View, Text, Button } from 'react-native';

const UseStateScreen = () => {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(number + 1);
  }
  const onDecrease = () => {
    setNumber(number - 1);
  }

  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 40, fontWeight: 'bold', marginBottom: 40}}>[UseStateScreen]</Text>
      <Text style={{fontSize: 30}}>현재 number = {number}</Text>
      <Button
        style={{fontSize: 30, backgroundColor: '#FFFFFF'}}
        title="더하기"
        onPress={onIncrease}
      />
      <Button
        title="빼기"
        onPress={onDecrease}
      />
    </View>
  );
};

export default UseStateScreen