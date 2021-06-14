import React, { useState, useMemo, useCallback } from "react";
import { View, Text, TextInput, Button } from 'react-native';

const UseCallbackScreen = () => {
  const [number, setNumber] = useState('');
  const [list, setList] = useState([]);

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  }, [number, list]);

  const getAverage = numbers => {
    console.log('평균값 계산중...');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
  };
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 40, fontWeight: 'bold', marginBottom: 40}}>[UseCallbackScreen]</Text>
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

      <Text style={{fontSize: 20}}>평균 : {avg}</Text>
    </View>
  );
};

export default UseCallbackScreen