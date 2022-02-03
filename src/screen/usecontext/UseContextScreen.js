import React, { useState, createContext } from "react";
import { StyleSheet, View, Text } from 'react-native';
import UseContextParentComponent from "./UseContextParentComponent";

//Context를 생성합니다.
export const userInfoContext = createContext();

const UseContextScreen = () => {
  const name = "임소희";
  const birthday = "1990.06.19";
  const [address, setAddress] = useState("서울특별시 도봉구");

  const userInfo = {
    name,
    birthday,
    address,
    setAddress
  }

  return (
    <userInfoContext.Provider value={userInfo}>
      {/*하위 컴포넌트에 userInfoContext에 저장된 데이터를 공유하기 위해 userInfoContext.Provider로 감싸고,
      userInfoContext에 userInfo 데이터를 저장하도록 valuse속성을 설정해줍니다.*/}
      <View style={styles.screen}>
        <Text style={styles.text}>[UseContextScreen]</Text>
        <Text style={styles.text}>이름 : {name}</Text>
        <Text style={styles.text}>생일 : {birthday}</Text>
        <Text style={styles.text}>주소 : {address}</Text>
        <UseContextParentComponent/>
      </View>
    </userInfoContext.Provider>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 5,
  },
  text: {
    fontSize: 20
  }
})

export default UseContextScreen
