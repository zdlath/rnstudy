import React, { useState, useCallback } from "react";
import { StyleSheet, View, Button } from 'react-native';

function Light({ room, isOn, toggle }) {
  console.log("Light 렌더링... ", { room, isOn });
  return (
    <Button
      title={isOn? room + " ON" : room + " OFF"}
      onPress={toggle}>
    </Button>
  );
}
Light = React.memo(Light);

const UseCallbackScreen = () => {
  const [masterOn, setMasterOn] = useState(false);
  const [kitchenOn, setKitchenOn] = useState(false);
  const [bathOn, setBathOn] = useState(false);

  //useCallback 미사용
  //const toggleMaster = () => setMasterOn(!masterOn);
  //const toggleKitchen = () => setKitchenOn(!kitchenOn);
  //const toggleBath = () => setBathOn(!bathOn);

  //useCallback 사용
  const toggleMaster = useCallback(() => setMasterOn(!masterOn), [masterOn]);
  const toggleKitchen = useCallback(() => setKitchenOn(!kitchenOn),[kitchenOn]);
  const toggleBath = useCallback(() => setBathOn(!bathOn), [bathOn]);

  console.log("UseCallbackScreen 렌더링...");
  return (
    <View style={styles.screen}>
      <Light room="침실" isOn={masterOn} toggle={toggleMaster} />
      <Light room="주방" isOn={kitchenOn} toggle={toggleKitchen} />
      <Light room="욕실" isOn={bathOn} toggle={toggleBath} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})

export default UseCallbackScreen