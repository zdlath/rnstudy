import React from "react";
import { StyleSheet, View } from 'react-native'; 
import PropsComponent from "./PropsComponent";

const PropsScreen = () => {

  return (
    <View style={styles.screen}>
      <PropsComponent product={'과자'} price={2000} />
      <PropsComponent product={'아이스크림'} price={1000} />
      <PropsComponent product={'빵'} price={2500} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})

export default PropsScreen
