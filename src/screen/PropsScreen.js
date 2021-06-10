import React from "react";
import { View, Text } from 'react-native'; 
import PropsComponent from "../component/PropsComponent";

const PropsScreen = () => {

  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 40, fontWeight: 'bold', marginBottom: 40}}>[PropsScreen]</Text>
      <PropsComponent product={'과자'} price={2000} />
      <PropsComponent product={'아이스크림'} price={1000} />
      <PropsComponent product={'빵'} price={2500} />
    </View>
  );
};

export default PropsScreen
