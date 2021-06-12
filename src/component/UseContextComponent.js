import React, { useContext } from "react";
import { View, Text,Button } from 'react-native'; 
import { UserInfoContext } from "../screen/UseContextScreen";

function UseContextComponent() {
  const { name, setName } = useContext(UserInfoContext);

  const changeName = () => {
    setName("김충기");
  }

  return (
    <View>
      <Text style={{fontSize: 20}}>name : {name}  (UseContextComponent)</Text>
      <Button
        style={{fontSize: 30}}
        title="이름 변경"
        onPress={changeName}
      />
    </View>
  );
}

export default UseContextComponent
