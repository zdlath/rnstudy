import React, { useState, useEffect } from "react";
import { View, Text, Button } from 'react-native';

const SecondScreen = () => {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('컴포넌트가 마운트될 때만 실행   -> 두번째 파라미터 : []');
  }, []);

  useEffect(() => {
    console.log('컴포넌트가 마운트될 때만 실행   -> 두번째 파라미터 : [], return 있음');
    return () => {
      console.log('컴포넌트가 언마운트될 때 실행   -> 두번째 파라미터 : [], return 있음');
    };
  }, []);

  useEffect(() => {
    console.log('컴포넌트가 렌더링될 때 실행     -> 두번째 파라미터 : 없음');
  });

  useEffect(() => {
    console.log('컴포넌트가 렌더링될 때 실행     -> 두번째 파라미터 : 없음, return 있음');
    return () => {
      console.log('컴포넌트가 언마운트될 때 실행   -> 두번째 파라미터 : 없음, return 있음');
    };
  });

  useEffect(() => {
    console.log('특정 값이 변경되었을 때 실행    -> 두번째 파라미터 : [number]');
  }, [number]);

  useEffect(() => {
    console.log('특정 값이 변경되었을 때 실행    -> 두번째 파라미터 : [number], return 있음');
    return () => {
      console.log('컴포넌트가 언마운트될 때 실행   -> 두번째 파라미터 : [number], return 있음');
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
    <View style={{flex: 1, backgroundColor: '#00FFFF'}}>
      <Text style={{fontSize: 40, fontWeight: 'bold', marginBottom: 40}}>[SecondScreen]</Text>
      <Text style={{fontSize: 30}}>현재 number = {number}</Text>
      <Button
        style={{fontSize: 30, backgroundColor: '#FFFFFF'}}
        title="더하기"
        onPress={onIncreaseNumber}
      />
      <Button
        title="빼기"
        onPress={onDecreaseNumber}
      />
      <Text style={{fontSize: 30}}>현재 count = {count}</Text>
      <Button
        style={{fontSize: 30, backgroundColor: '#FFFFFF'}}
        title="더하기"
        onPress={onIncreaseCount}
      />
      <Button
        title="빼기"
        onPress={onDecreaseCount}
      />
    </View>
  );
};

export default SecondScreen
