import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  INCREASE3_ASYNC_ACTION,
  DECREASE3_ASYNC_ACTION,
} from '../../redux/modules/counter3';

const ReduxSagaScreen = () => {
  //useSelector는 Store의 State를 조회하는 Hook입니다.
  const {number} = useSelector(state => ({
    number: state.counter3Reducer.number,
  }));

  //useDispatch는 Store의 함수를 사용 할 수 있게 해주는 Hook 입니다.
  //dispatch(action) 함수는 State를 변화시키기 위해 Action을 발생시킵니다.
  const dispatch = useDispatch();
  const onIncrease = () => {
    console.log('2. dispatch(INCREASE3_ASYNC_ACTION()) 함수 호출');
    dispatch(INCREASE3_ASYNC_ACTION());
  };
  const onDecrease = () => {
    console.log('2. dispatch(DECREASE3_ASYNC_ACTION()) 함수 호출');
    dispatch(DECREASE3_ASYNC_ACTION());
  };

  console.log('4. UI 업데이트');
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>숫자 : {number}</Text>
      <Button onPress={onIncrease} title="+" />
      <Button onPress={onDecrease} title="-" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 20,
  },
});

export default ReduxSagaScreen;
