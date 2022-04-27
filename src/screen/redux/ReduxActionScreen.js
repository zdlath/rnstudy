import React from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {INCREASE2_ACTION, DECREASE2_ACTION} from '../../redux/modules/counter2';
import {
  CHANGE_NAME2_ACTION,
  CHANGE_AGE2_ACTION,
} from '../../redux/modules/userInfo2';

const ReduxActionScreen = () => {
  //useSelector는 Store의 State를 조회하는 Hook입니다.
  const {number, name, age} = useSelector(state => ({
    number: state.counter2Reducer.number,
    name: state.userInfo2Reducer.name,
    age: state.userInfo2Reducer.age,
  }));

  //useDispatch는 Store의 함수를 사용 할 수 있게 해주는 Hook 입니다.
  //dispatch(action) 함수는 State를 변화시키기 위해 Action을 발생시킵니다.
  const dispatch = useDispatch();
  const onIncrease = () => {
    console.log('2. dispatch(INCREASE2_ACTION()) 함수 호출');
    dispatch(INCREASE2_ACTION());
  };
  const onDecrease = () => {
    console.log('2. dispatch(DECREASE2_ACTION()) 함수 호출');
    dispatch(DECREASE2_ACTION());
  };
  const onChangeName = newName => {
    console.log('2. dispatch(CHANGE_NAME2_ACTION(newName)) 함수 호출');
    dispatch(CHANGE_NAME2_ACTION(newName));
  };
  const onChangeAge = newAge => {
    console.log('2. dispatch(CHANGE_AGE2_ACTION(newAge)) 함수 호출');
    dispatch(CHANGE_AGE2_ACTION(newAge));
  };

  console.log('4. UI 업데이트');
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>숫자 : {number}</Text>
      <Button onPress={onIncrease} title="+" />
      <Button onPress={onDecrease} title="-" />

      <Text style={styles.text}>이름 : {name}</Text>
      <TextInput style={styles.textInput} onChangeText={onChangeName} />
      <Text style={styles.text}>나이 : {age}</Text>
      <TextInput style={styles.textInput} onChangeText={onChangeAge} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  textInput: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#000000',
    margin: 10,
  },
  text: {
    fontSize: 20,
  },
});

export default ReduxActionScreen;
