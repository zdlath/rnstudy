import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {GET_DATA_ACTION} from '../../redux/modules/promiseData';

const ReduxPenderScreen = () => {
  //useSelector는 Store의 State를 조회하는 Hook입니다.
  const {title, body, loading, resultCode} = useSelector(state => ({
    title: state.promiseDataReducer.title,
    body: state.promiseDataReducer.body,
    loading: state.promiseDataReducer.loading,
    resultCode: state.promiseDataReducer.resultCode,
  }));

  //useDispatch는 Store의 함수를 사용 할 수 있게 해주는 Hook 입니다.
  //dispatch(action) 함수는 State를 변화시키기 위해 Action을 발생시킵니다.
  const dispatch = useDispatch();
  const onGetPromiseData = () => {
    console.log('2. dispatch(GET_DATA_ACTION(1)) 함수 호출');
    dispatch(GET_DATA_ACTION(1));
  };

  console.log('5. UI 업데이트');
  return (
    <View style={styles.screen}>
      <Button onPress={onGetPromiseData} title="Get Promise Data" />
      {loading ? (
        <Text style={styles.text}>Loading...</Text>
      ) : resultCode == -1 ? (
        <Text style={styles.text}>Fail...</Text>
      ) : (
        <>
          <Text style={styles.text}>title : {title}</Text>
          <Text style={styles.text}>body : {body}</Text>
        </>
      )}
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

export default ReduxPenderScreen;
