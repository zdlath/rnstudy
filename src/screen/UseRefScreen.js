import React, { useState, useRef, useCallback } from "react";
import { View, Text, TextInput, Button } from 'react-native';

const UseRefScreen = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const nameInput = useRef();
  const ageInput = useRef();

  const onFocusName = useCallback(() => {
    nameInput.current.focus();
  }, []);

  const onFocusAge = useCallback(() => {
    ageInput.current.focus();
  }, []);

  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 40, fontWeight: 'bold', marginBottom: 40}}>[UseRefScreen]</Text>
      <TextInput
        style={{fontSize: 30, backgroundColor: '#FFFFFF'}}
        onChangeText={setName}
        value={name}
        placeholder="이름"
        ref={nameInput}
      />
      <TextInput
        style={{fontSize: 30, backgroundColor: '#FFFFFF'}}
        onChangeText={setAge}
        value={age}
        placeholder="나이"
        ref={ageInput}
      />      
      <Button
        style={{fontSize: 30, backgroundColor: '#FFFFFF'}}
        title="Name 입력필드로 이동"
        onPress={onFocusName}
      />
      <Button
        style={{fontSize: 30, backgroundColor: '#FFFFFF'}}
        title="Age 입력필드로 이동"
        onPress={onFocusAge}
      />
    </View>
  );
};

export default UseRefScreen