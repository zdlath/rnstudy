import React from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
//redux-actions 적용한 소스
import {INCREASE_ACTION, DECREASE_ACTION} from '../../redux/modules/counter';
import {
  CHANGE_NAME_ACTION,
  CHANGE_AGE_ACTION,
} from '../../redux/modules/userInfo';
//redux-actions 적용하지 않은 소스
// import {
//   createIncreaseAction,
//   createDecreaseAction,
// } from '../../redux/modules/counter';
// import {
//   createChangeNameAction,
//   crateChangeAgeAction,
// } from '../../redux/modules/userInfo';

const ReduxScreen = () => {
  //useSelector는 Store의 State를 조회하는 Hook입니다.
  const {number, name, age} = useSelector(state => ({
    number: state.counterReducer.number,
    name: state.userInfoReducer.name,
    age: state.userInfoReducer.age,
  }));

  //useDispatch는 Store의 함수를 사용 할 수 있게 해주는 Hook 입니다.
  //dispatch(action) 함수는 State를 변화시키기 위해 Action을 발생시킵니다.
  const dispatch = useDispatch();
  const onIncrease = () => {
    //redux-actions 적용한 소스
    console.log('2. dispatch(INCREASE_ACTION()) 함수 호출');
    dispatch(INCREASE_ACTION());
    //redux-actions 적용하지 않은 소스
    // const increaseAction = createIncreaseAction();
    // console.log('2. dispatch(increaseAction) 함수 호출');
    // dispatch(increaseAction);
  };
  const onDecrease = () => {
    //redux-actions 적용한 소스
    console.log('2. dispatch(DECREASE_ACTION()) 함수 호출');
    dispatch(DECREASE_ACTION());
    //redux-actions 적용하지 않은 소스
    // const decreaseAction = createDecreaseAction();
    // console.log('2. dispatch(decreaseAction) 함수 호출');
    // dispatch(decreaseAction);
  };
  const onChangeName = newName => {
    //redux-actions 적용한 소스
    console.log('2. dispatch(CHANGE_NAME_ACTION(newName)) 함수 호출');
    dispatch(CHANGE_NAME_ACTION(newName));
    //redux-actions 적용하지 않은 소스
    // const changeNameAction = createChangeNameAction(newName);
    // console.log('2. dispatch(changeNameAction) 함수 호출');
    // dispatch(changeNameAction);
  };
  const onChangeAge = newAge => {
    //redux-actions 적용한 소스
    console.log('2. dispatch(CHANGE_AGE_ACTION(newAge)) 함수 호출');
    dispatch(CHANGE_AGE_ACTION(newAge));
    //redux-actions 적용하지 않은 소스
    // const changeAgeAction = crateChangeAgeAction(newAge);
    // console.log('2. dispatch(changeAgeAction) 함수 호출');
    // dispatch(changeAgeAction);
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

export default ReduxScreen;
