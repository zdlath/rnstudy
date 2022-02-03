import React, { useState, useRef, useCallback } from "react";
import { StyleSheet, View, TextInput, Button } from 'react-native';

const UseRefScreen = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  //ref객체를 생성합니다.
  const nameInput = useRef();
  const ageInput = useRef();

  const onFocusName = useCallback(() => {
    //nameInput ref객체가 가리키는 컴포넌트(이름 입력필드)를 포커스합니다.
    nameInput.current.focus();
  }, []);

  const onFocusAge = useCallback(() => {
    //ageInput ref객체가 가리키는 컴포넌트(나이 입력필드)를 포커스합니다.
    ageInput.current.focus();
  }, []);

  return (
    <View style={styles.screen}>
      {/*nameInput ref객체가 이름 입력필드 컴포넌트를 가리키도록 ref속성을 설정해줍니다.*/}
      <TextInput
        style={styles.textInput}
        onChangeText={setName}
        value={name}
        placeholder="이름"
        ref={nameInput}
      />
      {/*ageInput ref객체가 나이 입력필드 컴포넌트를 가리키도록 ref속성을 설정해줍니다.*/}
      <TextInput
        style={styles.textInput}
        onChangeText={setAge}
        value={age}
        placeholder="나이"
        ref={ageInput}
      />      
      <Button
        title="Name 입력필드로 이동"
        onPress={onFocusName}
      />
      <Button
        title="Age 입력필드로 이동"
        onPress={onFocusAge}
      />
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
    margin: 5,
    borderWidth: 1,
    borderColor: '#000000',
  }
})

export default UseRefScreen