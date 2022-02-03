import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from 'react-native';

const UseStateScreen = () => {
  //초기값이 0인 number라는 상태 변수를 정의합니다.
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    //number 상태 변수 +1한 값으로 업데이트합니다.
    setNumber(number + 1);
  }
  const onDecrease = () => {
    //number 상태 변수 -1한 값으로 업데이트합니다.
    setNumber(number - 1);
  }

  return (
    <View style={styles.screen}>
      {/*number 상태 변수 값을 디스플레이합니다.*/}
      <Text style={styles.text}>현재 number = {number}</Text>
      <Button
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  text: {
    fontSize: 20,
    textAlign: "center"
  }
})

export default UseStateScreen