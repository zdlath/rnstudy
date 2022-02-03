import React, { useState, useMemo } from "react";
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

const UseMemoScreen = () => {
  const [number, setNumber] = useState('');
  const [list, setList] = useState([]);

  const onInsert = () => {
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
  //useMemo 미사용
  //const avg = getAverage(list);

  //useMemo 사용
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <View style={styles.screen}>
      <TextInput
        style={styles.textInput}
        onChangeText={setNumber}
        value={number}
      />
      <Button
        title="등록"
        onPress={onInsert}
      />

      {list.map((value, index) => (
        <Text style={styles.text}>{value}  </Text>
      ))}

      <Text style={styles.text}>평균 : {avg}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  textInput: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#000000',
    margin: 10
  },
  text: {
    fontSize: 20
  }
})

export default UseMemoScreen