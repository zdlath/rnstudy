import React, { useState, createContext } from "react";
import { View, Text } from 'react-native';
import UseContextComponent from "../component/UseContextComponent";

export const UserInfoContext = createContext();

const UseContextScreen = () => {
  const [name, setName] = useState("임소희");
  const userInfo = {
    name,
    setName
  }

  return (
    <UserInfoContext.Provider value={userInfo}>
      <View style={{flex: 1, backgroundColor: '#ccccff'}}>
        <Text style={{fontSize: 40, fontWeight: 'bold', marginBottom: 40}}>[UseContextScreen]</Text>
        <Text style={{fontSize: 20}}>name : {name}  (UseContextScreen)</Text>
        <UseContextComponent/>
      </View>
    </UserInfoContext.Provider>
  );
};

export default UseContextScreen
