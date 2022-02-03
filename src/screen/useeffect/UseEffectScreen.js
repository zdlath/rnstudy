import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button } from 'react-native';

const UseEffectScreen = () => {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('컴포넌트가 마운트될 때만 실행   -> 두번째 파라미터 : []');
  }, []);

  useEffect(() => {
    console.log('컴포넌트가 마운트될 때만 실행   -> 두번째 파라미터 : [], return 있음');
    return () => {
      console.log('Clean-Up 실행   -> 두번째 파라미터 : [], return 있음');
    };
  }, []);

  useEffect(() => {
    console.log('컴포넌트가 렌더링될 때 실행     -> 두번째 파라미터 : 없음');
  });

  useEffect(() => {
    console.log('컴포넌트가 렌더링될 때 실행     -> 두번째 파라미터 : 없음, return 있음');
    return () => {
      console.log('Clean-Up 실행   -> 두번째 파라미터 : 없음, return 있음');
    };
  });

  useEffect(() => {
    console.log('특정 값이 변경되었을 때 실행    -> 두번째 파라미터 : [number]');
  }, [number]);

  useEffect(() => {
    console.log('특정 값이 변경되었을 때 실행    -> 두번째 파라미터 : [number], return 있음');
    return () => {
      console.log('Clean-Up 실행   -> 두번째 파라미터 : [number], return 있음');
    };
  }, [number]);

  const onIncreaseNumber = () => {
    setNumber(number + 1);
  }
  const onDecreaseNumber = () => {
    setNumber(number - 1);
  }

  const onIncreaseCount = () => {
    setCount(count + 1);
  }
  const onDecreaseCount = () => {
    setCount(count - 1);
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>현재 number = {number}</Text>
      <Button
        style={styles.btn}
        title="더하기"
        onPress={onIncreaseNumber}
      />
      <Button
        style={styles.btn}
        title="빼기"
        onPress={onDecreaseNumber}
      />
      <Text style={styles.text}>현재 count = {count}</Text>
      <Button
        style={styles.btn}
        title="더하기"
        onPress={onIncreaseCount}
      />
      <Button
        style={styles.btn}
        title="빼기"
        onPress={onDecreaseCount}
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
  },
  btn: {
    fontSize: 30,
    backgroundColor: '#FFFFFF'
  }
})

export default UseEffectScreen
