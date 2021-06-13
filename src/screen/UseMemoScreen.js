import React, { useState } from "react";
import { View, Text, TextInput, Button } from 'react-native';

const UseMemoScreen = () => {
  const [number, setNumber] = useState('');
  const [list, setList] = useState([]);

  const onInsert = () => {
    console.log('number : ', number);
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  };

  const getAverage = numbers => {
    console.log('평균값 계산중...');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
  };

  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 40, fontWeight: 'bold', marginBottom: 40}}>[UseStateScreen]</Text>
      <TextInput
        style={{fontSize: 30, backgroundColor: '#FFFFFF'}}
        onChangeText={setNumber}
        value={number}
      />
      <Button
        style={{fontSize: 30, backgroundColor: '#FFFFFF'}}
        title="등록"
        onPress={onInsert}
      />

      {list.map((value, index) => (
        <Text style={{fontSize: 20}}>{value}  </Text>
      ))}

      <Text style={{fontSize: 20}}>평균 : {getAverage(list)}</Text>
    </View>
  );
};

export default UseMemoScreen