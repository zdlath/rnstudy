import React from "react";
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { increase, decrease } from '../../redux/modules/counter';
import { changeName, changeAge } from '../../redux/modules/userInfo';

const ReduxScreen = () => {
  // useSelector는 리덕스 스토어의 상태를 조회하는 Hook입니다.
  const { number, name, age } = useSelector(state => ({
    number: state.counter.number,
    name: state.userInfo.name,
    age: state.userInfo.age    
  }));

  // useDispatch는 리덕스 스토어의 함수에서 사용 할 수 있게 해주는 Hook 입니다.
  const dispatch = useDispatch();
  const onIncrease = () => {
    dispatch(increase());
  }
  const onDecrease = () => {
    dispatch(decrease());
  }
  const onChangeName = newName => {
    dispatch(changeName(newName));
  };
  const onChangeAge = newAge => {
    dispatch(changeAge(newAge));
  };

  return (
    <View>
      <Text>숫자 : {number}</Text>
      <Button onPress={onIncrease} title="+"/>
      <Button onPress={onDecrease} title="-"/>

      <Text>이름 : {name}</Text>
      <TextInput  style={styles.input} onChangeText={onChangeName} />
      <Text>나이 : {age}</Text>
      <TextInput  style={styles.input} onChangeText={onChangeAge} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default ReduxScreen