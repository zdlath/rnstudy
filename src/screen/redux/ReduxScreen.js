import React from "react";
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { createIncreaseAction, createDecreaseAction } from '../../redux/modules/counter';
import { createChangeNameAction, crateChangeAgeAction } from '../../redux/modules/userInfo';

const ReduxScreen = () => {
  //useSelector는 Store의 State를 조회하는 Hook입니다.
  const { number, name, age } = useSelector(state => ({
    number: state.counter.number,
    name: state.userInfo.name,
    age: state.userInfo.age    
  }));

  //useDispatch는 Store의 함수를 사용 할 수 있게 해주는 Hook 입니다.
  //dispatch(action) 함수는 State를 변화시키기 위해 Action을 발생시킵니다.
  const dispatch = useDispatch();
  const onIncrease = () => {
    const increaseAction = createIncreaseAction();
    console.log("2. dispatch(increaseAction) 함수 호출");
    dispatch(increaseAction);
  }
  const onDecrease = () => {
    const decreaseAction = createDecreaseAction();
    console.log("2. dispatch(decreaseAction) 함수 호출");
    dispatch(decreaseAction);
  }
  const onChangeName = newName => {
    const changeNameAction = createChangeNameAction(newName);
    console.log("2. dispatch(changeNameAction) 함수 호출");
    dispatch(changeNameAction);
  };
  const onChangeAge = newAge => {
    const changeAgeAction = crateChangeAgeAction(newAge);
    console.log("2. dispatch(changeAgeAction) 함수 호출");
    dispatch(changeAgeAction);
  };

  console.log("5. UI 업데이트");
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>숫자 : {number}</Text>
      <Button onPress={onIncrease} title="+"/>
      <Button onPress={onDecrease} title="-"/>

      <Text style={styles.text}>이름 : {name}</Text>
      <TextInput  style={styles.textInput} onChangeText={onChangeName} />
      <Text style={styles.text}>나이 : {age}</Text>
      <TextInput  style={styles.textInput} onChangeText={onChangeAge} />
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
});

export default ReduxScreen