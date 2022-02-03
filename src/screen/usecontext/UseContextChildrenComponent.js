import React, { useState, useContext } from "react";
import { StyleSheet, View, Text, Button, TextInput } from 'react-native'; 
import { userInfoContext } from "./UseContextScreen";

function UseContextChildrenComponent() {
  const { name, birthday, address, setAddress } = useContext(userInfoContext);
  const [addressInputText, setAddressInputText] = useState("");

  return (
    <View style={styles.component}>
      <Text style={styles.text}>[UseContextChildrenComponent]</Text>
      <View style={styles.view}>
        <Text>이름 : </Text>
        <Text style={styles.input}>{name}</Text>
      </View>
      <View style={styles.view}>
        <Text>생일 : </Text>
        <Text style={styles.input}>{birthday}</Text>
      </View>
      <View style={styles.view}>
        <Text>주소 : </Text>
        <TextInput
          style={styles.input}
          placeholder={address}
          value={addressInputText}
          onChangeText={setAddressInputText}
        />
        <Button
          title="변경"
          onPress={()=>{
            setAddress(addressInputText);
            setAddressInputText("");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  component: {
    margin: 10,
    padding: 5,
    backgroundColor: '#00ffff',
  },
  view: {
    flexDirection: 'row',
    marginTop: 5
  },
  text: {
    fontSize: 20
  },
  input: {
    width: 200,
    borderWidth: 1
  },
})

export default UseContextChildrenComponent
